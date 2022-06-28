import { CircleNotch } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { useCreateSubscriptionMutation } from '../graphql/generated';

export function Subscriber() {
  const [createSubscriber, { loading }] = useCreateSubscriptionMutation();
  const navigation = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState({
    name: true,
    email: true
  });

  const handleSendingSubscription = async (event: FormEvent) => {
    event.preventDefault();

    if (!name.trim()) {
      setIsValid(state => ({
        ...state,
        name: false
      }));

      setName('');

      return null;
    }

    if (!email.trim()) {
      setIsValid(state => ({
        ...state,
        email: false
      }));

      setEmail('');

      return null;
    }

    await createSubscriber({
      variables: {
        name,
        email
      }
    });

    setEmail('');
    setName('');

    navigation('/event');
  };

  return (
    <>
      <main className="min-h-screen flex justify-center items-start bg-coding bg-no-repeat bg-contain bg-center before:absolute before:inset-x-0 before:w-full before:min-h-screen before:bg-blur before:bg-no-repeat before:bg-cover before:bg-center before:-z-10">
        <div className="w-full flex justify-around items-center p-4 gap-4 mt-20">
          <div className="max-w-2xl flex flex-col gap-6">
            <img
              className="w-52"
              src="/logo.svg"
              alt="ignite lab - React JS"
            />
            <h1 className="text-[2.5rem] leading-[3.126rem]">
              Build a <span className="text-blue-500 font-bold">complete application</span> from scratch with <span className="text-blue-500 font-bold">React JS</span>
            </h1>

            <p className="text-gray-200 leading-relaxed">
              In just one week you will master in practice one of the most used technologies and with high demand to access the best opportunities on the market.
            </p>
          </div>

          <aside className="min-w-[24rem] flex flex-col gap-6 p-8 rounded border border-gray-500 bg-gray-700">
            <strong className="text-2xl">Sign up for free</strong>

            <form onSubmit={handleSendingSubscription} className="flex flex-col gap-2">
              <input
                value={name}
                onChange={e => {
                  if (!isValid.name) {
                    setIsValid(state => ({
                      ...state,
                      name: true
                    }));
                  }

                  setName(e.target.value);
                }}
                required
                className={`
                  placeholder:text-gray-300 rounded p-5 bg-gray-900 border border-transparent focus:border-green-300 outline-none hover:border-green-300 transition-colors ${!isValid.name && 'border-red-500'}
                `}
                type="text"
                placeholder="Your full name"
              />
              <input
                value={email}
                onChange={e => {
                  if (!isValid.email) {
                    setIsValid(state => ({
                      ...state,
                      email: true
                    }));
                  }

                  setEmail(e.target.value);
                }}
                required
                className={`
                  placeholder:text-gray-300 rounded p-5 bg-gray-900 border border-transparent focus:border-green-300 outline-none hover:border-green-300 transition-colors ${!isValid.email && 'border-red-500'}
                `}
                type="email"
                placeholder="Type your e-mail"
              />

              <button
                disabled={loading}
                className="mt-4 p-4 rounded font-bold capitalize bg-green-500 transition-colors hover:bg-green-700 disabled:opacity-50"
                type="submit"
              >
                {loading ? <CircleNotch size={24} className="text-white animate-spin mx-auto" /> : 'secure my spot'}
              </button>
            </form>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
