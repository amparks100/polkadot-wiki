"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1799:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"build-protocol-info",title:"Polkadot Protocol Information",sidebar_label:"Polkadot Protocol",description:"Characteristics about the Polkadot protocol, and what you need to consider when building.",slug:"../build-protocol-info"},l=void 0,c={unversionedId:"build/build-protocol-info",id:"build/build-protocol-info",isDocsHomePage:!1,title:"Polkadot Protocol Information",description:"Characteristics about the Polkadot protocol, and what you need to consider when building.",source:"@site/../docs/build/build-protocol-info.md",sourceDirName:"build",slug:"/build-protocol-info",permalink:"/docs/build-protocol-info",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-protocol-info.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1638359282,formattedLastUpdatedAt:"12/1/2021",frontMatter:{id:"build-protocol-info",title:"Polkadot Protocol Information",sidebar_label:"Polkadot Protocol",description:"Characteristics about the Polkadot protocol, and what you need to consider when building.",slug:"../build-protocol-info"},sidebar:"docs",previous:{title:"Integration Initiation",permalink:"/docs/build-integration"},next:{title:"Integrating Assets",permalink:"/docs/build-integrate-assets"}},d=[{value:"Tokens",id:"tokens",children:[{value:"Redenomination",id:"redenomination",children:[],level:3}],level:2},{value:"Addresses",id:"addresses",children:[{value:"Cryptography",id:"cryptography",children:[],level:3}],level:2},{value:"Existential Deposit",id:"existential-deposit",children:[],level:2},{value:"Free vs. Reserved vs. Locked vs. Vesting Balance",id:"free-vs-reserved-vs-locked-vs-vesting-balance",children:[],level:2},{value:"Extrinsics and Events",id:"extrinsics-and-events",children:[{value:"Extrinsics",id:"extrinsics",children:[],level:3},{value:"Transaction Mortality",id:"transaction-mortality",children:[],level:3},{value:"Unique Identifiers for Extrinsics",id:"unique-identifiers-for-extrinsics",children:[],level:3},{value:"Events",id:"events",children:[],level:3},{value:"Fees",id:"fees",children:[],level:3},{value:"Encoding",id:"encoding",children:[],level:3}],level:2},{value:"Runtime Upgrades",id:"runtime-upgrades",children:[],level:2},{value:"Smart Contracts",id:"smart-contracts",children:[],level:2},{value:"Other Networks",id:"other-networks",children:[],level:2},{value:"Other F.A.Q.",id:"other-faq",children:[],level:2}],h={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page serves as a high-level introduction to the Polkadot protocol with terminology that may be\nspecific to Polkadot, notable differences to other chains that you may have worked with, and\npractical information for dealing with the chain."),(0,r.kt)("h2",{id:"tokens"},"Tokens"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Token decimals:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Polkadot (DOT): 10"),(0,r.kt)("li",{parentName:"ul"},"Kusama (KSM): 12"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Base unit:"),' "Planck"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Balance type:")," ",(0,r.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/u128/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"u128")))),(0,r.kt)("h3",{id:"redenomination"},"Redenomination"),(0,r.kt)("p",null,'Polkadot conducted a poll, which ended on 27 July 2020 (block 888_888), in which the stakeholders\ndecided to redenominate the DOT token. The redenomination does not change the number of base units\n(called "plancks" in Polkadot) in the network. The only change is that a single DOT token will be\n1e10 plancks instead of the original 1e12 plancks. See the Polkadot blog posts explaining the\n',(0,r.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/the-first-polkadot-vote-1fc1b8bd357b"},"details")," and the\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/the-results-are-in-8f6b1ca2a4e6"},"results")," of the vote."),(0,r.kt)("p",null,"The redenomination took effect 72 hours after transfers were enabled, at block 1_248_326, which\noccurred at approximately 16:50 UTC on 21 Aug 2020."),(0,r.kt)("h2",{id:"addresses"},"Addresses"),(0,r.kt)("p",null,"In Polkadot (and most Substrate chains), user accounts are identified by a 32-byte (256-bit)\n",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId"),". This is simply the public key for the cryptography used by Substrate."),(0,r.kt)("p",null,'Polkadot (and Substrate) use the SS58 address format. This is a broad "meta-format" designed to\nhandle many different cryptographic schemes and chains. It has much in common with Bitcoin\'s Base58Check\nformat such as a version prefix, a hash-based checksum suffix, and base-58 encoding.'),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)"},"SS58 page"),"\nin the Substrate wiki for encoding information and a more comprehensive list of network prefixes."),(0,r.kt)("p",null,"Relevant SS58 prefixes for this guide:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Polkadot: 0"),(0,r.kt)("li",{parentName:"ul"},"Kusama: 2"),(0,r.kt)("li",{parentName:"ul"},"Westend: 42")),(0,r.kt)("h3",{id:"cryptography"},"Cryptography"),(0,r.kt)("p",null,"Polkadot supports the following ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-cryptography"},"cryptographic")," key pairs and signing\nalgorithms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ed25519"),(0,r.kt)("li",{parentName:"ul"},"Sr25519 - Schnorr signatures on the Ristretto group"),(0,r.kt)("li",{parentName:"ul"},"ECDSA signatures on secp256k1")),(0,r.kt)("p",null,"Note that the address for a secp256k1 key is the SS58 encoding of the ",(0,r.kt)("em",{parentName:"p"},"hash of the public key")," in\norder to reduce the public key from 33 bytes to 32 bytes."),(0,r.kt)("h2",{id:"existential-deposit"},"Existential Deposit"),(0,r.kt)("p",null,"Polkadot, and most Substrate-based chains, use an ",(0,r.kt)("em",{parentName:"p"},"existential deposit")," (ED) to prevent dust accounts\nfrom bloating chain state. If an account drops below the ED, it will be ",(0,r.kt)("em",{parentName:"p"},"reaped,")," i.e. completely removed\nfrom storage and the nonce reset. Polkadot's ED is 1 DOT, while Kusama's is 33.3333 microKSM\n(0.0000333333 KSM). You can always verify the existential deposit by checking the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"chain state")," for the constant\n",(0,r.kt)("inlineCode",{parentName:"p"},"balances.existentialDeposit"),"."),(0,r.kt)("p",null,"Likewise, if you send a transfer with value below the ED to a new account, it will fail. Custodial\nwallets should set a minimum withdrawal amount that is greater than the ED to guarantee successful\nwithdrawals."),(0,r.kt)("p",null,"Wallets and custodians who track account nonces for auditing purposes should take care not to have\naccounts reaped, as users could refund the address and try making transactions from it. The Balances\npallet provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive")," function that will return an error and abort rather than\nmake the transfer if doing so would result in reaping the sender's account."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Please be advised"),": The existential deposit is a property of the Relay Chain. Your account on\nthe Relay Chain has no direct impact on parachains as you have seperate accounts on each parachain.\nStill, parachains are able to define an existential deposit of their own, but this is seperate to\nthat of the Relay Chain ED.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": The Statemint parachain has a lower existential deposit than the Relay Chain (0.1 DOT and\n0.000003333 KSM) as well as lower transaction fees. It is highly recommended to handle balance\ntransfers on Statemint. Statemint integration is discussed in the next page of the guide.")),(0,r.kt)("h2",{id:"free-vs-reserved-vs-locked-vs-vesting-balance"},"Free vs. Reserved vs. Locked vs. Vesting Balance"),(0,r.kt)("p",null,"Account balance information is stored in\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/rustdocs/latest/pallet_balances/struct.AccountData.html"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountData")),".\nPolkadot primarily deals with two types of balances: free and reserved."),(0,r.kt)("p",null,'For most operations, free balance is what you are interested in. It is the "power" of an account in\nstaking and governance, for example. Reserved balance represents funds that have been set aside by\nsome operation and still belong to the account holder, but cannot be used.'),(0,r.kt)("p",null,"Locks are an abstraction over free balance that prevent spending for certain purposes. Several locks\ncan operate on the same account, but they overlap rather than add. Locks are automatically added\nonto accounts when tasks are done on the network (e.g. leasing a parachain slot or voting), these\nare not customizable. For example, an account could have a free balance of 200 DOT with two locks on\nit: 150 DOT for ",(0,r.kt)("inlineCode",{parentName:"p"},"Transfer")," purposes and 100 DOT for ",(0,r.kt)("inlineCode",{parentName:"p"},"Reserve")," purposes. The account could not make a\ntransfer that brings its free balance below 150 DOT, but an operation could result in reserving DOT\nsuch that the free balance is below 150, but above 100 DOT."),(0,r.kt)("p",null,"Bonding tokens for staking and voting in governance referenda both utilize locks."),(0,r.kt)("p",null,"Vesting is another abstraction that uses locks on free balance. Vesting sets a lock that decreases\nover time until all the funds are transferable."),(0,r.kt)("p",null,"More info:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.substrate.io/rustdocs/latest/frame_support/traits/trait.LockableCurrency.html"},"Lockable Currency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.substrate.io/rustdocs/latest/frame_support/traits/enum.WithdrawReason.html"},"Lock Withdraw Reasons")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.substrate.io/rustdocs/latest/pallet_vesting/struct.Vesting.html"},"Vesting"))),(0,r.kt)("h2",{id:"extrinsics-and-events"},"Extrinsics and Events"),(0,r.kt)("h3",{id:"extrinsics"},"Extrinsics"),(0,r.kt)("p",null,"Extrinsics constitute information from the outside world and take on three forms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inherents"),(0,r.kt)("li",{parentName:"ul"},"Signed Transactions"),(0,r.kt)("li",{parentName:"ul"},"Unsigned Transactions")),(0,r.kt)("p",null,"As an infrastructure provider, you will deal almost exclusively with signed transactions. You will,\nhowever, see other extrinsics within the blocks that you decode. Find more information in the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/concepts/extrinsics/"},"Substrate documentation"),"."),(0,r.kt)("p",null,"Inherents contain information that is not provably true, but validators agree on based on some\nmeasure of reasonability. For example, a timestamp cannot be proved, but validators can agree that\nit is within some delta of their system clock. Inherents are not gossiped on the network, and only\nblock authors insert them into blocks."),(0,r.kt)("p",null,"Signed transactions contain a signature of the account that issued the transaction and stands to pay\na fee to have the transaction included on chain. Because the value of including signed transactions\non-chain can be recognized prior to execution, they can be gossiped on the network between nodes\nwith a low risk of spam. Signed transactions fit the concept of a transaction in Ethereum or\nBitcoin."),(0,r.kt)("p",null,"Some transactions cannot be signed by a fee-paying account and use unsigned transactions. For\nexample, when a user claims their DOT from the Ethereum DOT indicator contract to a new DOT address,\nthe new address doesn't yet have any funds with which to pay fees."),(0,r.kt)("h3",{id:"transaction-mortality"},"Transaction Mortality"),(0,r.kt)("p",null,'Extrinsics can be mortal or immortal. The transaction payload includes a block number and block hash\ncheckpoint from which a transaction is valid and a validity period (also called "era" in some\nplaces) that represents the number of blocks after the checkpoint for which the transaction is\nvalid. If the extrinsic is not included in a block within this validity window, it will be discarded\nfrom the transaction queue.'),(0,r.kt)("p",null,"The chain only stores a limited number of prior block hashes as reference. You can query this\nparameter, called ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockHashCount"),", from the chain state or metadata. This parameter is set to 2400\nblocks (about four hours) at genesis. If the validity period is larger than the number of blocks\nstored on-chain, then the transaction will only be valid as long as there is a block to check it\nagainst, i.e. the minimum value of validity period and block hash count."),(0,r.kt)("p",null,'Setting the block checkpoint to zero, using the genesis hash, and a validity period of zero will\nmake the transaction "immortal".'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," If an account is reaped and a user re-funds the account, then they could replay an\nimmortal transaction. Always default to using a mortal extrinsic."),(0,r.kt)("h3",{id:"unique-identifiers-for-extrinsics"},"Unique Identifiers for Extrinsics"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The assumption that a transaction's hash is a unique identifier is the number one mistake\nthat indexing services and custodians make. This error will cause major issues for your users.\nMake sure that you read this section carefully.")),(0,r.kt)("p",null,"Many infrastructure providers on existing blockchains, e.g. Ethereum, consider a transaction's hash\nas a unique identifier. In Substrate-based chains like Polkadot, a transaction's hash only serves as\na fingerprint of the information within a transaction, and there are times when two transactions\nwith the same hash are both valid. In the case that one is invalid, the network properly handles the\ntransaction and does not charge a transaction fee to the sender nor consider the transaction in the\nblock's fullness."),(0,r.kt)("p",null,"Imagine this contrived example with a ",(0,r.kt)("a",{parentName:"p",href:"#existential-deposit"},"reaped account"),". The first and last\ntransactions are identical, and both valid."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Index"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Hash"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Origin"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Nonce"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Call"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Results"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0x01"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transfer 5 DOT to B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account A reaped")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0x02"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account B"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transfer 7 DOT to A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account A created (nonce = 0)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0x01"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Account A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transfer 5 DOT to B"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Successful transaction")))),(0,r.kt)("p",null,"In addition, not every extrinsic in a Substrate-based chain comes from an account as a\npublic/private key pair; Substrate, rather, has the concept of dispatch \u201corigin\u201d, which could be\ncreated from a public key account, but could also form from other means such as governance. These\norigins do not have a nonce associated with them the way that an account does. For example,\ngovernance might dispatch the same call with the same arguments multiple times, like \u201cincrease the\nvalidator set by 10%.\u201d This dispatch information (and therefore its hash) would be the same, and the\nhash would be a reliable representative of the call, but its execution would have different effects\ndepending on the chain\u2019s state at the time of dispatch."),(0,r.kt)("p",null,"The correct way to uniquely identify an extrinsic on a Substrate-based chain is to use the block ID\n(height or hash) and the extrinsic's index. Substrate defines a block as a header and an array of\nextrinsics; therefore, an index in the array at a canonical height will always uniquely identify a\ntransaction. This methodology is reflected in the Substrate codebase itself, for example to\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/rustdocs/latest/pallet_multisig/struct.Timepoint.html"},"reference a previous transaction"),"\nfrom the Multisig pallet."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"While extrinsics represent information from the outside world, events represent information from the\nchain. Extrinsics can trigger events. For example, the Staking pallet emits a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reward")," event when\nclaiming staking rewards to tell the user how much the account was credited."),(0,r.kt)("p",null,"If you want to monitor deposits into an address, keep in mind that several transactions can initiate\na balance transfer (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"balances.transferKeepAlive")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"utility.batch")," transaction with a\ntransfer inside of it). Only monitoring ",(0,r.kt)("inlineCode",{parentName:"p"},"balances.transfer")," transactions will not be sufficient.\nMake sure that you monitor events in each block for events that contain your addresses of interest.\nMonitor events instead of transaction names to ensure that you can properly credit deposits."),(0,r.kt)("h3",{id:"fees"},"Fees"),(0,r.kt)("p",null,"Polkadot uses weight-based fees that, unlike gas, are charged ",(0,r.kt)("em",{parentName:"p"},"pre-dispatch."),' Users can also add a\n"tip" to increase transaction priority during congested periods. See the\n',(0,r.kt)("a",{parentName:"p",href:"/docs/learn-transaction-fees"},"transaction fee")," page for more info."),(0,r.kt)("h3",{id:"encoding"},"Encoding"),(0,r.kt)("p",null,"Parity's integration tools should allow you to deal with decoded data. If you'd like to bypass them\nand interact directly with the chain data or implement your own codec, Polkadot encodes block and\ntransaction data using the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/advanced/scale-codec/"},"SCALE codec"),"."),(0,r.kt)("h2",{id:"runtime-upgrades"},"Runtime Upgrades"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/learn-runtime-upgrades"},"Runtime upgrades")," allow Polkadot to change the\nlogic of the chain without the need for a hard fork. A hard fork would require node operators to manually\nupgrade their nodes to the latest runtime version. In a distributed system, this is a complex process to\ncoordinate and communicate. Polkadot can upgrade without a hard fork. The existing runtime logic is followed\nto update the Wasm runtime stored on the blockchain to a new version. The upgrade is then included in the\nblockchain itself, meaning that all the nodes on the network execute it."),(0,r.kt)("p",null,"Generally there is no need to upgrade your nodes manually before the runtime upgrade as they will\nautomatically start to follow the new logic of the chain. Nodes only need to be updated when the\nruntime requires new host functions or there is a change in networking or consensus."),(0,r.kt)("p",null,"Transactions constructed for a given runtime version will not work on later versions. Therefore, a\ntransaction constructed based on a runtime version will not be valid in later runtime versions. If\nyou don't think you can submit a transaction before the upgrade, it is better to wait and construct\nit after the upgrade takes place."),(0,r.kt)("p",null,"Although upgrading your nodes is generally not necessary to follow an upgrade, we recommend\nfollowing the Polkadot releases and upgrading in a timely manner, especially for high priority or\ncritical releases."),(0,r.kt)("h2",{id:"smart-contracts"},"Smart Contracts"),(0,r.kt)("p",null,"The Polkadot Relay Chain does not support smart contracts."),(0,r.kt)("h2",{id:"other-networks"},"Other Networks"),(0,r.kt)("p",null,"Besides running a private network, Polkadot has two other networks where you could test\ninfrastructure prior to deploying to the Polkadot mainnet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kusama Canary Network:")," Kusama is Polkadot's cutting-edge cousin. Many risky features are\ndeployed to Kusama prior to making their way into Polkadot."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Westend Testnet:")," Westend is Polkadot's testnet and uses the Polkadot runtime."),(0,r.kt)("h2",{id:"other-faq"},"Other F.A.Q."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Can an account's balance change without a corresponding, on-chain transaction?")),(0,r.kt)("p",null,"No, but not all balance changes are in a ",(0,r.kt)("em",{parentName:"p"},"transaction,")," some are in ",(0,r.kt)("em",{parentName:"p"},"events.")," You will need to run\nan archive node and listen for events and transactions to track all account activity. This\nespecially applies to ",(0,r.kt)("em",{parentName:"p"},"locking")," operations if you are calculating balance as the spendable balance,\ni.e. free balance minus the maximum lock."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'What chain depth is considered "safe"?')),(0,r.kt)("p",null,"Polkadot uses a deterministic finality mechanism. Once a block is finalized, it cannot be reverted\nexcept by a hard fork. Kusama has had hard forks that had to revert four finalized blocks in order\nto cancel a runtime upgrade. Using a finalized depth of ten blocks should be safe."),(0,r.kt)("p",null,"Note that block production and finality are isolated processes in Polkadot, and the chain can have a\nlong unfinalized head."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do users need to interact with any smart contracts?")),(0,r.kt)("p",null,"No, users interact directly with the chain's logic."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Does Polkadot have state rent?")),(0,r.kt)("p",null,"No, Polkadot uses the existential deposit to prevent dust accounts and other economic mechanisms\nlike locking or reserving tokens for operations that utilize state."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What is an external source to see the current chain height?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS explorer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkascan.io/"},"Polkascan block explorer"))))}u.isMDXComponent=!0}}]);