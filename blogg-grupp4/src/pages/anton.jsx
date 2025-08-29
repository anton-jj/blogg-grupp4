import '../App.css'
import '../bloog.css'
import { Posts } from '../components/Posts'

export function AntonSida() {
    return (
        <div className="bloog-main">
            <section className="bloog-main-section">
                <h2 className='bloog-main-author-header'>Anton</h2>
                <Posts/>
            </section>
        </div>
        )
}