import ProtectedContentWrapper from "../src/components/ProtectedContentWrapper"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProtectedContentWrapper>
        <Component {...pageProps} />
      </ProtectedContentWrapper>
    </>
  )
}
