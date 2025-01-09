'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
    const [imagemAtiva, setImagemAtiva] = useState<null | number>(null);

    const imagesLinks = [
        'kasturi-roy-a1LVsvM_zuE-unsplash.jpg',
        'river-fx-ji6MucM0kFc-unsplash.jpg',
        'rohan-reddy-fMj8YP7MSv4-unsplash.jpg',
        'bruno-ramos-lara-JbFy-1qsWEg-unsplash.jpg',
        'anibal-paradisi-JSNmsp6iqvw-unsplash.jpg',
    ];

    return (
        <div className="flex justify-center h-screen items-center gap-12">
            {imagesLinks.map((link, index) => {
                return (
                    <Image
                        key={link}
                        src={`/images/${link}`}
                        alt="Imagem de um pássaro"
                        width={200}
                        height={150}
                        onClick={() => setImagemAtiva(index)}
                        className={`border-2 cursor-pointer transition-transform duration-1000 transform ${
                            index === imagemAtiva ?  'scale-150' : 'scale-50'
                        }`}
                    />
                );
            })}
        </div>
    );
}
