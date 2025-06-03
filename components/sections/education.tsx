export default function Education() {
    const education = [
        {
            degree: "Bachelor's in Computer Engineering",
            institution: 'Jan Kochanowski University of Kielce',
            year: '2017 - 2021',
        },
    ];

    return (
        <section id="education" className="py-16">
            <h2 className="text-center mb-12">Education</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
                {education.map((item, index) => (
                    <div key={index} className="glass-card rounded-xl p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-xl text-purple-200">{item.degree}</h3>
                            <span className="text-white/60">{item.year}</span>
                        </div>
                        <p className="text-lg mb-2">{item.institution}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
