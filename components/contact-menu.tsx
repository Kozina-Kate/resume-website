'use client';

import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type ContactMenuProps = {
  placement: 'hero' | 'footer';
};

export function ContactMenu({ placement }: ContactMenuProps) {
  const isFooter = placement === 'footer';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            className={isFooter ? 'footer-contact' : 'contact-button'}
            size="lg"
          >
            {isFooter ? 'Написать мне' : 'Связаться'}
            {isFooter ? <ArrowUpRight /> : <ChevronDown />}
          </Button>
        }
      />
      <DropdownMenuContent
        className="contact-menu"
        align={isFooter ? 'end' : 'start'}
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Удобный способ связи</DropdownMenuLabel>
          <DropdownMenuItem
            render={
              <a
                href="https://t.me/katiakozina"
                target="_blank"
                rel="noreferrer"
                aria-label="Написать Екатерине в Telegram"
              />
            }
          >
            <MessageCircle /> Telegram{' '}
            <span className="menu-contact">@katiakozina</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            render={
              <a href="tel:+79313416433" aria-label="Позвонить Екатерине" />
            }
          >
            <Phone /> Позвонить{' '}
            <span className="menu-contact">+7 931 341-64-33</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            render={
              <a
                href="mailto:kozina-dev@mail.ru"
                aria-label="Написать Екатерине по электронной почте"
              />
            }
          >
            <Mail /> Почта{' '}
            <span className="menu-contact">kozina-dev@mail.ru</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
