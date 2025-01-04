const About = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-6 sm:p-8 shadow-lg">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-orange-400">
            The Bhagavad Gita
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-orange-400">
                Sacred Dialogue
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                The Bhagavad Gita, meaning "The Song of God," is a 700-verse
                Sanskrit scripture that forms part of the Hindu epic
                Mahabharata. This timeless dialogue between Lord Krishna and
                Arjuna takes place on the battlefield of Kurukshetra, just
                before the start of the great war. As Arjuna faces a moral
                dilemma, Krishna imparts profound wisdom that has resonated with
                seekers of truth for millennia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-orange-400">
                Divine Wisdom
              </h2>
              <p className="text-base sm:text-lg mb-4">
                The Gita's teachings transcend religious boundaries, offering
                profound insights into:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Dharma (Duty)",
                  "Karma (Action)",
                  "Bhakti (Devotion)",
                  "Jnana (Knowledge)",
                ].map((item, index) => (
                  <li key={index} className="p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-400 mb-2">
                      {item}
                    </h3>
                    <p>
                      {item === "Dharma (Duty)"
                        ? "Understanding one's purpose and responsibilities in life"
                        : item === "Karma (Action)"
                        ? "The law of cause and effect and righteous action"
                        : item === "Bhakti (Devotion)"
                        ? "The path of devotional service and divine love"
                        : "The pursuit of spiritual wisdom and self-realization"}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-orange-400">
                Universal Message
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Though spoken over 5000 years ago, the Gita's message remains
                remarkably relevant today. It addresses the eternal human quest
                for meaning, purpose, and happiness. The text provides practical
                guidance for dealing with life's challenges, emotional
                turbulence, and spiritual growth. Its teachings have inspired
                countless individuals across cultures, including philosophers,
                scientists, and leaders like Mahatma Gandhi and Albert Einstein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-orange-400">
                Spiritual Practice
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                The Gita teaches various spiritual practices including
                meditation, selfless service, and the importance of controlling
                the mind. It emphasizes that true happiness comes not from
                external achievements but from inner peace and self-realization.
                The text introduces different forms of yoga, not just as
                physical exercises, but as paths to union with the divine:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Karma Yoga: The path of selfless action</li>
                <li>Bhakti Yoga: The path of devotion</li>
                <li>Jnana Yoga: The path of knowledge</li>
                <li>Raja Yoga: The path of meditation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-orange-400">
                Structure and Content
              </h2>
              <p className="text-base sm:text-lg mb-4">
                The Bhagavad Gita is structured into 18 chapters, each focusing
                on different aspects of spiritual life:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Chapters 1-6", "Chapters 7-12", "Chapters 13-18"].map(
                  (chapter, index) => (
                    <div key={index} className="p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-400 mb-2">
                        {chapter}
                      </h3>
                      <p>
                        {chapter === "Chapters 1-6"
                          ? "Focus on Karma Yoga and the nature of the self"
                          : chapter === "Chapters 7-12"
                          ? "Explore Bhakti Yoga and the nature of the divine"
                          : "Delve into Jnana Yoga and the relationship between the individual and the cosmos"}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-orange-400">
                Key Teachings
              </h2>
              <ul className="space-y-4">
                {[
                  "Immortality of the Soul",
                  "Detachment",
                  "Equanimity",
                  "Self-Realization",
                ].map((teaching, index) => (
                  <li key={index} className="p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-400 mb-2">
                      {teaching}
                    </h3>
                    <p>
                      {teaching === "Immortality of the Soul"
                        ? "The Gita teaches that the soul (Atman) is eternal and indestructible."
                        : teaching === "Detachment"
                        ? "It emphasizes the importance of performing one's duties without attachment to the results."
                        : teaching === "Equanimity"
                        ? "The text encourages maintaining balance in both success and failure."
                        : "Ultimate liberation (Moksha) is achieved through realizing one's true nature."}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-orange-400">
                Conclusion
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                The Bhagavad Gita continues to be a source of inspiration and
                guidance for millions around the world. Its timeless wisdom
                offers practical solutions to the complexities of modern life,
                encouraging individuals to live with purpose, compassion, and
                spiritual awareness. Whether approached as a religious text, a
                philosophical treatise, or a guide to ethical living, the Gita
                has something profound to offer to every sincere seeker.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
