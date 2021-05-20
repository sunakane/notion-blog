import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>Powerful Bass</h1>
        <h2>by Naohiro Fukudome</h2>
        <div className="explanation">
          <p style={{ textAlign: 'center' }}>あれやこれやをかいていきます</p>
        </div>
      </div>
    </>
  )
}
