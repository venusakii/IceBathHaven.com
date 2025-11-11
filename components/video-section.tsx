export default function VideoSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#E8F9FD] mb-4">Experience the Journey</h2>
          <p className="text-[#8DA7B5] text-lg max-w-2xl mx-auto">Watch how cold therapy transforms lives</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl overflow-hidden aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/pq6WHJzOkno"
              title="Cold Plunge Benefits"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
