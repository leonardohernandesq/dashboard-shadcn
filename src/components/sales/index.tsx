import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { CircleDollarSign } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export const Sales = () => {
  return (
    <Card className='flex-1'>
        <CardHeader>
            <div className="flex items-center justify-center">
                <CardTitle className='text-lg sm:text-xl text-gray-800'>
                Últimos clientes
                </CardTitle>
                <CircleDollarSign className='ml-auto w-4 h-4'/>
            </div>
            <CardDescription>Últimos clientes nas úlitmas 24h</CardDescription>
        </CardHeader>

        <CardContent className='max-h-72 overflow-y-scroll'>
            <article className='flex items-center gap-2 border-b py-2'>
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/leonardohernandesq.png"/>
                    <AvatarFallback>LQ</AvatarFallback>
                </Avatar>
                <div>
                    <p className='text-sm sm:text-base font-semibold'>Leonardo Hernandes</p>
                    <span className='text-[12px] sm:text-sm text-gray-400'>leonardo_hernandes@outlook.com.br</span>
                </div>
            </article>
            <article className='flex items-center gap-2 border-b py-2'>
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/leonardohernandesq.png"/>
                    <AvatarFallback>LQ</AvatarFallback>
                </Avatar>
                <div>
                    <p className='text-sm sm:text-base font-semibold'>Leonardo Hernandes</p>
                    <span className='text-[12px] sm:text-sm text-gray-400'>leonardo_hernandes@outlook.com.br</span>
                </div>
            </article>
            <article className='flex items-center gap-2 border-b py-2'>
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/leonardohernandesq.png"/>
                    <AvatarFallback>LQ</AvatarFallback>
                </Avatar>
                <div>
                    <p className='text-sm sm:text-base font-semibold'>Leonardo Hernandes</p>
                    <span className='text-[12px] sm:text-sm text-gray-400'>leonardo_hernandes@outlook.com.br</span>
                </div>
            </article>
            <article className='flex items-center gap-2 border-b py-2'>
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/leonardohernandesq.png"/>
                    <AvatarFallback>LQ</AvatarFallback>
                </Avatar>
                <div>
                    <p className='text-sm sm:text-base font-semibold'>Leonardo Hernandes</p>
                    <span className='text-[12px] sm:text-sm text-gray-400'>leonardo_hernandes@outlook.com.br</span>
                </div>
            </article>
            <article className='flex items-center gap-2 border-b py-2'>
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/leonardohernandesq.png"/>
                    <AvatarFallback>LQ</AvatarFallback>
                </Avatar>
                <div>
                    <p className='text-sm sm:text-base font-semibold'>Leonardo Hernandes</p>
                    <span className='text-[12px] sm:text-sm text-gray-400'>leonardo_hernandes@outlook.com.br</span>
                </div>
            </article>
            <article className='flex items-center gap-2 border-b py-2'>
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/leonardohernandesq.png"/>
                    <AvatarFallback>LQ</AvatarFallback>
                </Avatar>
                <div>
                    <p className='text-sm sm:text-base font-semibold'>Leonardo Hernandes</p>
                    <span className='text-[12px] sm:text-sm text-gray-400'>leonardo_hernandes@outlook.com.br</span>
                </div>
            </article>
            <article className='flex items-center gap-2 border-b py-2'>
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/leonardohernandesq.png"/>
                    <AvatarFallback>LQ</AvatarFallback>
                </Avatar>
                <div>
                    <p className='text-sm sm:text-base font-semibold'>Leonardo Hernandes</p>
                    <span className='text-[12px] sm:text-sm text-gray-400'>leonardo_hernandes@outlook.com.br</span>
                </div>
            </article>
            <article className='flex items-center gap-2 border-b py-2'>
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/leonardohernandesq.png"/>
                    <AvatarFallback>LQ</AvatarFallback>
                </Avatar>
                <div>
                    <p className='text-sm sm:text-base font-semibold'>Leonardo Hernandes</p>
                    <span className='text-[12px] sm:text-sm text-gray-400'>leonardo_hernandes@outlook.com.br</span>
                </div>
            </article>
        </CardContent>
    </Card>
  )
}