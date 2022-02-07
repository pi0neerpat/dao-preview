// This page will be rendered when an error makes it all the way to the top of the
// application without being handled by a Javascript catch statement or React error
// boundary.
//
// You can modify this page as you wish, but it is important to keep things simple to
// avoid the possibility that it will cause its own error. If it does, Redwood will
// still render a generic error page, but your users will prefer something a bit more
// thoughtful. =)
import globalConfig from 'src/global.config'

const currentYear = new Date().getFullYear()

export default () => (
  <main>
    <style
      dangerouslySetInnerHTML={{
        __html: `
              html, body {
                position: fixed;
                margin: 0;
                height: 100%;
                width: 100%;
              }
              html * {
                box-sizing: border-box;
              }
              @media all and (min-width:800px) {
                .header-container {
                  max-width: 80rem;
                  height: 66px;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  align-items: center;
                  padding: 2.5ex 2ex;
                  background: #272522;
                  border-radius:0px;
                }
                .header-buttons-container {
                  margin-left: auto;
                  font-size: 16px;
                }
                .header-buttons {
                  display: inline-flex;
                  font-weight: bold;
                  margin-right: 2rem;
                }

                .footer-info {
                  position: relative;
                  margin-left: 8rem;

                }

                .header-mobile {
                  display: none;
                }
              }

              @media all and (max-width:800px) {
                .header-container {
                  max-width: 80rem;
                  height: 66px;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  align-items: center;
                  background: #272522;
                  border-radius: 12px;
                }
                .header-mobile {
                  font-weight: bold;
                }
                .header-container div {
                  display: none;
                }
              }

              .error-container {
                  position: relative;
                  top: 25vh;
                  max-width: 50rem;
                  margin: 0 auto;
                }
                .error-title {
                  margin-bottom: 1rem;
                }
                .error-content {
                  height: auto;
                  background: #272522;
                  border-radius: 12px;
                  padding: 16px;
                }
                .error-content h4 {
                  font-weight: bold;
                }

                .footer-container {
                  position: fixed;
                  left: 50%;
                  transform: translateX(-50%);
                  bottom: 0;
                  max-width: 80rem;
                  display: flex;
                  flex-wrap: wrap;
                  flex-direction: row;
                  font-size: 13px;
                  justify-content: space-around;
                  text-align: center;
                  margin-bottom: 2rem;
                }
                .footer-container img {
                  margin-right: 1rem
                }
                .footer-container div {
                  display: inline-flex;
                  align-items: center;
                }
                .footer-info a {
                  margin-right: 1rem;
                }

            `,
      }}
    />
    <div
      dangerouslySetInnerHTML={{
        __html: `
              <div class="fatal-error-container">
                <div class="header-container">
                  <a href="/">
                    <img src="/home-icon.png" alt="Home" style="height: 35px"/>
                  </a>
                  <h3 class="header-mobile">Menu</h3>
                </div>
                <div class="error-container">
                  <h1 class="error-title">Oops!</h1>
                  <div class="error-content">
                    <h4>Something went wrong</h4>
                    <p>
                    The developer team has been notified of this error. Thank you for your patience.
                    </p>
                  </div>
                </div>
                <div class="footer-container">
                  <div class="footer-socials">
                    <a href=${globalConfig.DISCORD_URL}>
                      <img src="/icons/discord.svg" alt="" />
                    </a>
                    <a href=${globalConfig.BLOG_URL}>Blog</a>
                  </div>
                  <div class="footer-info">
                    <a href=${globalConfig.TOC_URL}>Terms of Service</a>
                    <a href=${globalConfig.PRIVACY_POLICY_URL}>Privacy Policy</a>
                    <a href=${globalConfig.SUPPORT_URL}>Support</a>
                  </div>
                  <div class="footer-branding">
                    <p>© ${globalConfig.PROJECT_LEGAL_NAME} ${currentYear}</p>
                  </div>
                </div>
              </div>
        `,
      }}
    />
  </main>
)
