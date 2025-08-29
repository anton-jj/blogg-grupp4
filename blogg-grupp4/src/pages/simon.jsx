import '../App.css'
import '../bloog.css'
import { Posts } from '../components/Posts'

export function SimonSida() {
    return (
        <div className="bloog-main">
            <section className="bloog-main-section">
                <h2 className='bloog-main-author-header'>Simon</h2>
                <Posts/>
            </section>
        </div>
        )
}