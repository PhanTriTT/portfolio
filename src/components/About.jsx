const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>

        <p className='text-lg mt-20'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ab
          corrupti voluptatem, dolorem minus pariatur ipsam rem iusto sed veniam
          ut, placeat debitis voluptates nobis! Numquam est soluta placeat
          laborum!
        </p>
        <br />

        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          corrupti minima omnis modi, neque earum, dicta rerum ratione beatae
          repellat, eligendi in quibusdam sapiente expedita quasi natus minus
          cumque inventore excepturi accusamus? Alias voluptatum quia non sed
          quasi perferendis nisi accusamus. Id illo dolor, aliquid repellat in
          iste cupiditate aut?
        </p>
      </div>
    </div>
  );
};
export default About;
