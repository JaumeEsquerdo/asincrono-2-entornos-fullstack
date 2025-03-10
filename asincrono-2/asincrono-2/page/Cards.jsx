import { useState } from "react";

const cardsData = [
    {
        id: 1, name: "Antonio Ruiz", message: "Felicidades amigo. Te veo pronto", time: "08:00",
        history: [{ sender: "Antonio Ruiz", message: "Felicidades amigo. Te veo pronto", time: "08:00" }, {
            sender: "Tú", message: "Gracias, nos vemos pronto", time: "08:05"
        }]
    },
    {
        id: 2, name: "Manuela Antonia", message: "Hola, un placer hablar contigo", time: "18:33",
        history: [{ sender: "Manuela Antonia", message: "Hola, un placer hablar contigo", time: "18:33" }, {
            sender: "Tú", message: "Muy interesante la charla", time: "20:05"
        }]
    },
    {
        id: 3, name: "Angela H.", message: "Que mal dia ha salido hoy", time: "13:40",
        history: [{ sender: "Angela H.", message: "Que mal dia ha salido hoy", time: "13:40" }, {
            sender: "Tú", message: "Un dia bastante malo verdad? Nos vemos pronto", time: "14:05"
        }]
    },
];

export const Cards = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [expanded, setExpanded] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)
    const [touchStartX, setTouchStartX] = useState(null)
    const [archivedMessages, setArchiveMessages] = useState([])

    // const handleNextCard = () => {
    //     if (activeIndex < cardsData.length - 1) {
    //         setActiveIndex(activeIndex + 1)
    //     }
    // }

    // const handleExpand = (card) => {
    //     setExpanded(prev => !prev)
    //     setSelectedCard(card)
    // }

    // capturar el inicio del toque en la pantalla
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    }

    // capturar el final del toque y mirar dirección
    const handleTouchEnd = (e) => {
        if (!touchStartX) return;
        // obtiene la posición X del dedo en la pantalla que se ha levantado
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX

        // si el desliz pasa de 50 (umbral para q actue) y cumple lo otro avanza al hacer desliz a la izq
        if (diff > 50 && activeIndex < cardsData.length - 1) {

            const archiveCard = cardsData[activeIndex]
            setArchiveMessages(prev => [...prev, archiveCard])
            setActiveIndex(activeIndex + 1)
        } else if (diff < -50 && activeIndex < cardsData.length - 1) {
            // al deslizar a la derecha avanza solamente
            setActiveIndex(activeIndex + 1)
        }

        //devolver la posición al levantar los dedos a null
        setTouchStartX(null)
    }


    const handleCardClick = (card, i) => {
        if (selectedCard?.id !== card.id) {
            setExpanded(true);
            setSelectedCard(card);
            setActiveIndex(i);
        } else {
            setExpanded(false)
        }
    };

    const resetCards = () => {
        setActiveIndex(0);
        setSelectedCard(null);
        setExpanded(false);
    }

    return (
        <main className="Main">
            <h2>Desliza a la izquierda para avanzar</h2>
            <div className="Card-stack"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* filtrar primero las cartas archivas antes del map (si la carta no está archivada sera true y las enseñara) */}
                {cardsData.filter(card => !archivedMessages.some(archived => archived.id == card.id)).map((card, i) => (
                    i >= activeIndex && (
                        <div onClick={() => handleCardClick(card, i)} key={card.id}
                            className={`Card ${i === activeIndex ? "Card-front" : "Card-back"}`}

                            style={{ zIndex: cardsData.length - i }}
                        >
                            <h2 className="Card-h2">Introductions</h2>
                            <div className="Profile">
                                <h3 className="Profile-h3">{card.name}</h3>
                                <span>{card.time}</span>
                            </div>
                            <p>{card.message}</p>
                        </div>
                    )

                ))}

            </div>

            {expanded && <CardAbierta card={selectedCard} setExpanded={setExpanded} />}

            <button onClick={resetCards}>Reiniciar</button>
        </main>

    );
}

export const CardAbierta = ({ card, setExpanded }) => {
    return (
        <div className="CardAbierta">
            <div className="Profile"></div>
            <h2>{card.name}</h2>
            <button onClick={() => setExpanded(false)}>X</button>
            <div className="Conversation">
                {card.history.map((msg, i) => (
                    <div key={i}>
                        <p><strong>{msg.sender}</strong></p>
                        <p>{msg.message}</p>
                        <span>{msg.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

