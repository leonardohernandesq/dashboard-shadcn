import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import Link from 'next/link'
import {Home, LogOut, Package, PanelBottom, Settings2, ShoppingBag, Users} from 'lucide-react'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip'

export const Sidebar = () => {
  return (
    <div className='flex w-full flex-col bg-muted/40'>
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex sm:flex-col">
            <nav className='flex flex-col items-center gap-4 px-2 py-5'>
                <TooltipProvider>
                    <Link href="#" className='flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full' >
                        <Package className='h-4 w-4'/>
                        <span className="sr-only">Dashboard Avatar</span>
                    </Link>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#" className='flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground' >
                                <Home className='h-5 w-5'/>
                                <span className="sr-only">Início</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='left'>
                            Início
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#" className='flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground' >
                                <ShoppingBag className='h-5 w-5'/>
                                <span className="sr-only">Pedidos</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='left'>
                            Pedidos
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#" className='flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground' >
                                <Package className='h-5 w-5'/>
                                <span className="sr-only">Produtos</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='left'>
                            Produtos
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#" className='flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground' >
                                <Users className='h-5 w-5'/>
                                <span className="sr-only">Clientes</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='left'>
                        Clientes
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#" className='flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground' >
                                <Settings2 className='h-5 w-5'/>
                                <span className="sr-only">Configurações</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='left'>
                            Configurações
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav className=' mt-auto flex flex-col items-center gap-4 px-2 py-5'>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="#" className='flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground rounded-lg transition-colors hover:text-foreground' >
                                <LogOut className='h-5 w-5'/>
                                <span className="sr-only">Sair</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='left'>
                            Sair
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>

        <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14 sm:hidden'>
            <header className='sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant='outline' className='sm:hidden'>
                            <PanelBottom className='h-5 w-5'/>
                            <span className='sr-only'>Abrir / fechar menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='left' className='bg-white sm:max-w-xs'>
                        <nav className='grid gap-6 text-lg font-medium'>
                            <Link 
                                href="#"
                                className='flex h-10 w-10 gap-2 bg-primary rounded-full items-center justify-center text-primary-foreground md:text-base'
                                prefetch={false}
                            >
                                <Package className='h-5 w-5 transition-all ' />
                                <span className='sr-only'>Logo</span>
                            </Link>
                            <Link 
                                href="#"
                                className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                prefetch={false}
                            >
                                <Home className='h-5 w-5 transition-all' />
                                <span>Início</span>
                            </Link>
                            <Link 
                                href="#"
                                className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                prefetch={false}
                            >
                                <ShoppingBag className='h-5 w-5 transition-all' />
                                <span>Pedidos</span>
                            </Link>
                            <Link 
                                href="#"
                                className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                prefetch={false}
                            >
                                <Package className='h-5 w-5 transition-all' />
                                <span>Produtos</span>
                            </Link>
                            <Link 
                                href="#"
                                className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                prefetch={false}
                            >
                                <Users className='h-5 w-5 transition-all' />
                                <span>Clientes</span>
                            </Link>
                            <Link 
                                href="#"
                                className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                prefetch={false}
                            >
                                <Settings2 className='h-5 w-5 transition-all' />
                                <span>Configurações</span>
                            </Link>
                            <Link 
                                href="#"
                                className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                                prefetch={false}
                            >
                                <LogOut className='h-5 w-5 transition-all' />
                                <span>Sair</span>
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <h2>Menu</h2>
            </header>
        </div>
    </div>
  )
}