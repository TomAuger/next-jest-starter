import HelloWorld from '@/components/HelloWorld'

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      <HelloWorld />
    </main>
  )
}
