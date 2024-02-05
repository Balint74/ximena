import React from "react";

const Conn = () => {
  return (
    <section id="kapcsolat" className="mx-auto my-10 max-w-7xl px-2 sm:px-10">
      <div className="rounded-xl bg-pink-700/90 p-10  text-white">
        <h2 className="text-center font-mono text-5xl font-bold tracking-wider">Ximena Mandala</h2>
        <h2 className="upper mt-3 text-center text-2xl text-pink-50">Keressen bizalommal!</h2>
        <h3 className="mt-16 mb-2 text-center text-xl font-bold uppercase tracking-wider">E-mail</h3>
        <h2 className="upper text-center text-2xl text-pink-50">nagyximena75@gmail.hu</h2>
        <div className="mt-6 text-center">
          <a className=" rounded-lg bg-pink-100 px-7 py-3 text-lg font-bold text-pink-800" href="mailto:nagyximena75@gmail.hu">
            E-mail írása
          </a>
        </div>
        <h3 className="mt-16 mb-2 text-center text-xl font-bold uppercase tracking-wider">Telefon</h3>
        <h2 className="upper text-center text-2xl text-pink-50">+36 70 339 5698</h2>

        <div className="mt-10 text-center">
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100089237539406">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="mx-auto fill-white ">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Conn;
