
import './Tournaments.css'

const tournamentWinners = [
  {
    id: 1,
    category: 'U-14 Category',
    title: 'Golden Cups Tournament',
    achievement: 'Runner-Up',
    image: '/goldencups.jpeg',
    description:
      'Our U-14 players delivered a strong performance and secured the runner-up position. Congratulations to the entire team for their teamwork and determination!',
  },
  {
    id: 2,
    category: 'U-12 Category',
    title: 'KVIIT Tournament',
    achievement: 'Runner-Up',
    image: '/KVIITTournament.jpeg',
    description:
      'Our U-12 team showcased enthusiasm, teamwork, and sportsmanship to earn the runner-up position. Proud of our young athletes!',
  },
  
{
  id: 3,
  category: 'Under-12 Category',
  title: 'Under-12 Winners',
  achievement: 'Champions',
  image: '/under12.jpeg',
  description:
    'Congratulations to our Under-12 players for their achievement! Their teamwork, determination, and dedication made this a memorable tournament.',
},
{
  id: 4,
  category: 'Under-14 Category',
  title: 'Under-14 Winners',
  achievement: 'Champions',
  image: '/under14.jpeg',
  description:
    'Celebrating our Under-14 team and their tournament achievement. Proud of our young athletes for their effort, teamwork, and sportsmanship.',
},

]

export default function Tournaments() {
  return (
    <section className="tournaments-section" id="tournaments">
      <div className="tournaments-container">
        <div className="tournaments-heading">
          <span className="tournaments-eyebrow">
            OUR ACHIEVEMENTS
          </span>

          <h2>Recent Tournaments & Winners</h2>

          <p>
            Celebrating the dedication, teamwork, and achievements
            of our young athletes. Here are some memorable moments
            from our recent tournament appearances.
          </p>
        </div>

        <div className="tournament-feature">
          <div className="tournament-feature-content">
            <span className="tournament-status">
              TOURNAMENT HIGHLIGHTS
            </span>

            <h3>Hard Work. Teamwork. Achievement.</h3>

            <p>
              At IQ200 Sports Academy, every tournament is an
              opportunity for our players to learn, compete, and
              grow. We are proud of our U-12 and U-14 teams for
              their performances and achievements.
            </p>

            <p>
              These moments reflect the commitment of our players,
              the guidance of our coaches, and the support of
              everyone who is part of the IQ200 family.
            </p>
          </div>

          <div className="tournament-trophy" aria-hidden="true">
            🏆
          </div>
        </div>

        <div className="tournament-cards">
          {tournamentWinners.map((tournament) => (
            <article
              className="tournament-card"
              key={tournament.id}
            >
              <div className="tournament-image-wrapper">
                <img
                  src={tournament.image}
                  alt={`${tournament.category} team receiving tournament awards`}
                  className="tournament-image"
                  loading="lazy"
                />

                <span className="achievement-badge">
                  🏆 {tournament.achievement}
                </span>
              </div>

              <div className="tournament-card-content">
                <span className="tournament-category">
                  {tournament.category}
                </span>

                <h3>{tournament.title}</h3>

                <p>{tournament.description}</p>

                <div className="tournament-result">
                  <span>🏅</span>
                  <span>
                    Achievement: <strong>{tournament.achievement}</strong>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="tournaments-footer">
          <p>
            Every match builds confidence. Every tournament creates
            memories. Every player has the potential to shine.
          </p>
        </div>
      </div>
    </section>
  )
}
