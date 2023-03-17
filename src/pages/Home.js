const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 400,
    fontSize: 48,
    textAlign: 'center',
  },
  icon: {
    marginRight: 20,
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <span style={styles.icon} role="img" aria-label="Telephone icon">
          ☎️
        </span>
        Phonebook welcomes you!{' '}
      </h1>
    </div>
  );
}
