import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/Gedyra',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/sunakane',
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img src="/avatar.jpeg" alt="avatar" height={60} />
        </div>

        <h1 style={{ marginTop: 0 }}>About</h1>

        <div className={contactStyles.name}>Naohiro Fukudome</div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>

        <div className="explanation" style={{ textAlign: 'center' }}>
          <p>Like: Logic, TypeScript, Web Backend</p>
          <p>
            Member of{' '}
            <ExtLink href="https://twitter.com/CancaoNovaChor">
              @CancaoNovaChor
            </ExtLink>{' '}
            / DoroNuma
          </p>
        </div>
      </div>
    </>
  )
}
