const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white text-center px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold">Hi, I'm Devang Hingladiya</h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300">A creative developer who loves building beautiful web experiences</p>
      <a 
        href="#projects" 
        className="mt-6 px-6 py-3 bg-primary text-white rounded-full text-lg hover:bg-secondary transition transform hover:scale-110 hover:shadow-lg"
      >
        View Projects
      </a>
    </section>
  );
};

export default Hero;
