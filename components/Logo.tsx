import React from 'react';
import { Banknote } from 'lucide-react';

function Logo() {
    return <a href="/" className="flex items-center gap-2">
        <Banknote className="stroke h-11 w-11 stroke-green-500 stroke-[1.5]" />
        <p className="bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-transparent text-3xl font-bold leading-tight tracking-tighter">
            PetrichorFinance
        </p>
    </a>;
};

export default Logo;