import profile from './profile.png';

export default ({ value = profile }) => {
  return (
    <div style={{ position: 'relative', height: 32 }}>
      <div style={{ position: 'absolute', top: 0, zIndex: 2 }}>
        <img src={value} alt="profile" width={110} height={136} />
      </div>
    </div>
  );
};
