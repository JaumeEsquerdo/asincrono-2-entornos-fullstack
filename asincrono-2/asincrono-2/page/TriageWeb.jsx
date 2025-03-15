import { Link } from 'react-router-dom'

const TriageWeb = () => {
    return (
        <div className="TriageWeb">
            <header className="TriageWeb-header">
                <div>
                    <img src="/img/hero.svg.png" alt="hero" />
                    <h1 className="">Triage is first aid for your inbox.</h1>
                    <p>Everything you loved about the
                        original Triage is back – only better.
                        Download Triage 2 on the App Store
                        today.</p>
                    <img src="/img/download.svg.png" alt="Boton" />
                </div>
                <img src="/img/hero.png.png" alt="App" />

            </header>
            <section className='Feature Feature--dragLeft'>
                <img src="/img/archive.png.png" alt="email drag left" />

                <div>
                    <img src="/img/svg.png" alt="drag left" />
                    <h2>Drag left to archive</h2>
                    <p>Unread messages appear
                        in a stack of cards, like
                        this.</p>
                </div>

            </section>
            <section className='Feature Feature--dragRight'>
                <div>
                    <img src="/img/svg1.png" alt="keep email" />
                    <h2>Drag right to keep
                    </h2>
                    <p>Or create your own custom workflow.
                    </p>
                </div>
                <img src="/img/keep.png.png" alt="keep" />


            </section>
            <section className='Feature Feature--tap'>
                <img src="/img/expand.png.png" alt="expand email" />

                <div>
                    <img src="/img/Frame.png" alt="expand" />
                    <h2>Tap to expand</h2>
                    <p>Open the message to
                        view the whole thread.</p>
                </div>

            </section>
            <section className='Feature Feature--reply'>
                <div>
                    <img src="/img/Frame1.png" alt="reply img" />
                    <h2>Reply in context

                    </h2>
                    <p>Send a quick reply without leaving the
                        app.
                    </p>
                </div>
                <img src="/img/reply.png.png" alt="reply email" />


            </section>

            <section className='Featur-info'>
                <div>
                    <div>
                        <img src="/img/svg2.png" alt="work img" />
                    </div>
                    <h3>Works with Gmail,

                        iCloud & IMAP</h3>
                </div>
                <div>
                    <div>
                        <img src="/img/svg5.png" alt="process img" />
                    </div>
                    <h3>All processing

                        happens on device
                    </h3>
                </div>
                <div>
                    <div>
                        <img src="/img/svg3.png" alt="data img" />
                    </div>
                    <h3>Your data is

                        yours to stay</h3>
                </div>
                <div>
                    <div>
                        <img src="/img/Frame3.png" alt="support img" />
                    </div>
                    <h3>Supports

                        dark mode</h3>
                </div>
                <div>
                    <div>
                        <img src="/img/svg4.png" alt="free to use img" />
                    </div>
                    <h3>Free to use. Or pay

                        for more features.</h3>
                </div>
                <div>
                    <div>
                        <img src="/img/Frame4.png" alt="built img" />
                    </div>
                    <h3>Built & maintained

                        by indie developers</h3>
                </div>
            </section>

            <footer className='Footer'>
                <div className='Feature-testimonials'>
                    <p>Since I’ve been using
                        Triage, I’m more caught
                        up on my email than I
                        have been in years.
                    </p>
                    <img src="/img/daring-fireball.png.png" alt="daring fireball img" />
                </div>
                <div>
                    <p>If you re constantly
                        battling to keep your email
                        account at inbox zero,
                        Triage for iOS could be
                        worth a look.</p>
                    <img src="/img/the-verge.svg.png" alt="the verge img" />
                </div>
                <div>
                    <p>Triage makes it feel
                        seamless, and even fun,
                        to achieve if not Inbox
                        Zero at least Inbox Zen.
                    </p>
                    <img src="/img/macworld.svg.png" alt="macworld img" />
                </div>
                <div>
                    <p>Triage provides the first
                        aid necessary to get your
                        inbox back in fighting
                        shape.
                    </p>
                    <img src="/img/maclife.png.png" alt="maclife img" />
                </div>
                <div>
                    <p>Triage is a boon to those
                        who have struggled to
                        keep their inboxes clean
                        and organized.</p>
                    <img src="/img/clean-email.png.png" alt="clean email img" />
                </div>
                <div>
                    <p>Triage is my new favorite
                        email app for iPhone.</p>
                    <img src="/img/macstories.png.png" alt="macstories img" />
                </div>

                <nav className='Footer-nav'>
                    <Link>FAQ</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                    <Link>Security</Link>

                    <div className='Footer-rrss'>
                        <img src="/img/svg5.png" alt="email" />
                        <img src="/img/Frame5.png" alt="twitter" />
                    </div>
                </nav>

            </footer>
        </div>
    );
}

export default TriageWeb;