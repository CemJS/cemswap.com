import { Cemjsx } from 'cemjs-all';
import english from '@svg/english.svg';
import ru from '@svg/ru.svg';
import Cem from '../icons/Cem';
import Telegram from '../icons/Telegram';
import VK from '../icons/Vk';
import Discord from '../icons/Discord';
import Github from '../icons/Github';
import Reddit from '../icons/Reddit';
import Facebook from '../icons/Facebook';
import Tiktok from '../icons/Tiktok';
import Twitter from '../icons/Twitter';
import Youtube from '../icons/Youtube';
import Instagram from '../icons/Instagram';
import type { TIcon } from '../icons/@types';

type Link = {
  href: string;
  Icon: ({ classes }: TIcon) => any;
}
function Link({ href, Icon }: Link) {
  const click = () => {
    window.open(href);
  }

  return (
    <li class="group cursor-pointer flex items-center justify-center h-[30px] w-[30px] rounded-2xl 
    transition-all bg-white hover:bg-black" onclick={ click }>
      <a href={ href } target="_blank">
        <Icon classes='group-hover:fill-white' />
      </a>
    </li>
  )
}

export default function () {
  return (
    <footer class="footer flex-initial">
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center justify-center lg:justify-between gap-10 p-4">
          <ul class="flex flex-wrap justify-center items-center gap-4">
            <li><img class="object-cover rounded-2xl h-[30px] w-[30px]" src={ ru } alt="cypto emergency ru social media" /></li>

            <Link href="https://t.me/cryptoemergencychat" Icon={ Telegram } />
            <Link href="https://vm.tiktok.com/ZSefEMs2c" Icon={ Tiktok } />
            <Link href="https://vk.com/cryptoemergency" Icon={ VK } />
            <Link href="https://instagram.com/cryptoemergencyrussia" Icon={ Instagram } />
            <Link href="https://crypto-emergency.com/ru" Icon={ Cem } />
          </ul>
          <ul class="flex flex-wrap justify-center items-center gap-4">
            <li><img class="object-cover rounded-2xl h-[30px] w-[30px]" src={ english } alt="cypto emergency english social media" /></li>

            <Link href="https://t.me/emergencycrypto" Icon={ Telegram } />
            <Link href="https://vm.tiktok.com/ZSefExJrr" Icon={ Tiktok } />
            <Link href="https://www.facebook.com/groups/cryptoemergency" Icon={ Facebook } />
            <Link href="https://instagram.com/cryptoemergency" Icon={ Instagram } />
            <Link href="https://discord.com/invite/Qdm7W8DjYc" Icon={ Discord } />
            <Link href="https://github.com/CryptoEmergency" Icon={ Github } />
            <Link href="https://twitter.com/cryptoemergency" Icon={ Twitter } />
            <Link href="https://www.reddit.com/user/Crypto_Emergency" Icon={ Reddit } />
            <Link href="https://youtube.com/channel/UCb9Fx-fNikzs-OZwnTXepLg" Icon={ Youtube } />
            <Link href="https://crypto-emergency.com/" Icon={ Cem } />
          </ul>
          <p>Crypto Emergency. All rights reserved © 2022-{ new Date().getFullYear() }</p>
        </div>
      </div>
    </footer>
  )
}