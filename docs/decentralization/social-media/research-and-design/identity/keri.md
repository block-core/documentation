
**KERI: Key Event Registry Infrastructure**

_&quot;KERI is the first truly decentralized identity system. It is ledger-less, so it doesn&#39;t need to use a ledger or is ledger-portable. Its identifiers are not locked to any given ledger and may switch as needed. In other words, KERI identifiers are genuinely portable._

_KERI is inherently supportive of GDPR (global data protection rights) compliance. KERI provides non-intertwined identifier trust bases, meaning that a given identifier&#39;s data may be erased and truly forgotten._

_KERI has a decentralized, secure root-of-trust based on cryptographic self-certifying identifiers. It has separable control over shared data which means each entity is truly self-sovereign over its identifiers. It uses hash-chained data structures called Key Event Logs that enable ambient cryptographic verifiability. In other words, any log may be verified anywhere at anytime by anybody.&quot;_

- KERI Website: [https://keri.one/](https://keri.one/)

**The White Paper** : [https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI\_WP\_2.x.web.pdf](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI\_WP\_2.x.web.pdf)

**SSI-Meetup**

[https://ssimeetup.org/key-event-receipt-infrastructure-keri-secure-identifier-overlay-internet-sam-smith-webinar-58/](https://ssimeetup.org/key-event-receipt-infrastructure-keri-secure-identifier-overlay-internet-sam-smith-webinar-58/)

**SSI Meetup Presentation**  :

[https://www.youtube.com/watch?v=izNZ20XSXR0](https://www.youtube.com/watch?v=izNZ20XSXR0)

**SSI Meetup Slides**  :

[https://docs.google.com/presentation/d/1HvDSdMFLAuTMlgPoQ4y6UlgfTA3zziRlChNsV7MuprY/edit?usp=sharing](https://docs.google.com/presentation/d/1HvDSdMFLAuTMlgPoQ4y6UlgfTA3zziRlChNsV7MuprY/edit?usp=sharing)

**GitHub**  :

[https://github.com/orgs/WebOfTrust/repositories?type=all](https://github.com/orgs/WebOfTrust/repositories?type=all)

**Rust Implementation**  :
[https://github.com/WebOfTrust/keriox](https://github.com/WebOfTrust/keriox)

**Composable Event Streaming Representation (CESR)**

[https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html](https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html)

[CESR Proof Signatures are the “Segwit” of Authentic Data in KERI.](https://medium.com/happy-blockchains/cesr-proof-signatures-are-the-segwit-of-authentic-data-in-keri-e891c83e070a)


**KERI.DotNet**

I am particularly interested in the Rust implementation of KERI. It would be great if we could put a DotNet wrapper around that library. Thoughts?

There is a great deal of information out there on KERI, so let's give a summary of 
key insights.

**How Does KERI Differ From a Blockchain?**

There is a lot of information out there on KERI, and it may be difficult to grasp 
the key  innovation. So here is representation of the possible element/requirements in the SSI/Blockchain
"Trade Space":


![](elements-of-decentalization-medium.jpg)


**KERI Does not require:**
<ul>
	<li>Total Ordering because only the Controller (of the key pair) can order its events</li>
   <li>Crypto-currrency to implement an Identity System</li>
   <li>Shared control, because there is only one controller for the KERI log</li>
   <li>Locked to a ledger</li>
</ul>

**KERI Elements:**

![](keri-elements-medium.jpg)
