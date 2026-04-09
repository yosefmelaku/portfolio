const JossiPhoto = new URL('../Jossi.jpg', import.meta.url).href;

const Home: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '80vh',
      padding: '2rem',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white'
    }}>
      <div style={{ flex: 1, textAlign: 'left' }}>
        <div style={{ marginBottom: '2rem' }}>
          {/* Placeholder for logo */}
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: '1rem',
            border: '2px solid white'
          }}>
            <img src={JossiPhoto} alt="Yosef Melaku Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h1 style={{ fontSize: '3rem', margin: '0' }}>Yosef Melaku</h1>
          <p style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>Computer Science Student</p>
        </div>
      </div>
      <div style={{ flex: 1, textAlign: 'left', paddingLeft: '2rem' }}>
        <h2>About Me</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Hello! I'm a passionate Computer Science student with a keen interest in software development,
          web technologies, and problem-solving. I enjoy building innovative solutions and learning new
          technologies. Currently pursuing my degree in Computer Science, I have experience in various
          programming languages and frameworks.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects,
          or participating in hackathons. I'm always eager to take on new challenges and collaborate with
          like-minded individuals.
        </p>
      </div>
    </div>
  );
};

export default Home;