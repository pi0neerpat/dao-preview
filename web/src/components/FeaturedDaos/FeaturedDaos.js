import MCAvatar from './metacartel__avatar.jpg'
import LexAvatar from './lex__avatar.png'
import MGDAvatar from './mgd__avatar.jpg'
import VenturesAvatar from './ventures__avatar.jpg'
import RaidAvatar from './raidguild__avatar.png'
import FoundationsAvatar from './foundations__avatar.jpeg'

const featuredDaoList = [
  {
    address: '0xb152b115c94275b54a3f0b08c1aa1d21f32a659a',
    network: 'xdai',
    image: MCAvatar,
    name: 'MetaCartel',
    description: 'The airport to Web3',
    badges: ['Grants', 'xDai'],
  },
  {
    address: '0x93fa3b9d57bcddda4ed2ee40831f5859a9c417b7',
    network: 'matic',
    image: MGDAvatar,
    name: 'Meta Gamma Delta',
    description: 'Supporting women-led projects in Web3',
    badges: ['Grants', 'Polygon'],
  },
  {
    address: '0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f',
    network: 'xdai',
    image: RaidAvatar,
    name: 'RaidGuild',
    description: 'Collective of Web3 product builders',
    badges: ['Guilds', 'xDai'],
  },
  {
    address: '0x58234d4bf7a83693dc0815d97189ed7d188f6981',
    network: 'xdai',
    image: LexAvatar,
    name: 'LexDAO',
    description: 'The decentralized legal engineering guild',
    badges: ['Grants', 'xDai'],
  },
  {
    address: '0x1b975a9daf25e7b01e0a6c72d657ff74925327a8',
    network: 'xdai',
    image: FoundationsAvatar,
    name: 'Foundations DAO',
    description: 'Feedback farming worldwide',
    badges: ['Clubs', 'xDai'],
  },
  {
    address: '0x4570b4faf71e23942b8b9f934b47ccedf7540162',
    network: 'mainnet',
    image: VenturesAvatar,
    name: 'Venture DAO',
    description: 'Investing in Web3 projects and teams',
    badges: ['Investments', 'Mainnet'],
  },
]

const FeaturedDaos = () => {
  return (
    <>
      <div className="mt-4 mb-4">Try with these DAOs</div>
      {featuredDaoList.map((dao) => {
        return (
          <div className="mb-2 flex items-center w-full">
            <img className="mr-4" src={dao.image} width="100px" />
            <div>
              <h3>{dao.name}</h3>{' '}
              <p>
                {dao.network} - {dao.address}
              </p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default FeaturedDaos
