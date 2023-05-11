import React, { useState } from 'react';
import './facts1.css';
import { MotionAnimate } from 'react-motion-animate';

const Facts1 = () => {
	const [background, setBackground] = useState('map1');
	return (
		<div class='pageWrapper'>
			<MotionAnimate
				animation='fadeInUp'
				reset={true}
				distance={200}
				delay={1.5}
				speed={1}
			>
				<div className='pageContainer'>
					<h1>You Made It !!!</h1>
					<h2>I Hope You Enjoyed it!</h2>
					<h3>A quick recap:</h3>
					<div className='mapContainer'>
						<div className='map1'></div>
						<div className='recapText'>
							We started out in <strong>Stirling</strong> . Located in central
							Scotland, with roots dating back to ancient times, it played a
							significant role in Scottish history. Stirling Castle, perched on
							a volcanic rock, witnessed numerous battles and political events.
							It was a favored residence of Scottish monarchs, including Mary,
							Queen of Scots. The Battle of Stirling Bridge in 1297 saw William
							Wallace's victory against English forces during the Wars of
							Scottish Independence. The Battle of Bannockburn in 1314, led by
							Robert the Bruce, secured Scotland's independence from England.
							Stirling's strategic location near the crossing of the River Forth
							made it a pivotal military and trade hub. Its historic Old Town
							preserves charming medieval and Renaissance architecture,
							showcasing its past. Today, Stirling stands as a vibrant city,
							embracing its heritage while offering modern amenities and serving
							as a cultural, educational, and administrative center. <br />
							<br />
							<strong>Urquhart Castle</strong>, located on the shores of Loch
							Ness in Scotland, is a captivating and iconic medieval fortress
							with a fascinating history. Dating back to the 13th century, the
							castle witnessed centuries of dramatic events, including battles
							between Scottish clans and conflicts during the Wars of Scottish
							Independence. As a strategic stronghold, it changed hands multiple
							times, enduring sieges and destruction. Despite its turbulent
							past, Urquhart Castle retains its majestic ruins, offering
							visitors breathtaking views of Loch Ness and the surrounding
							Highlands. Exploring its remnants, such as the tower, gatehouse,
							and Great Hall, allows glimpses into the castle's former grandeur
							and the stories of its inhabitants. Today, the castle stands as a
							popular tourist attraction, allowing visitors to immerse
							themselves in Scotland's medieval heritage while marveling at the
							stunning beauty of its Loch Ness setting. <br />
							<br />
							<strong>Eilean Donan Castle</strong>, situated on a small island
							in the western Highlands of Scotland, is an enchanting and iconic
							fortress that epitomizes Scottish history and romanticism.
							Originating from the 13th century, the castle has endured a
							tumultuous past, having been destroyed and rebuilt multiple times.
							It served as a stronghold for the Clan Macrae and played a
							significant role in the Jacobite uprisings of the 17th and 18th
							centuries. Restored to its former glory in the early 20th century,
							Eilean Donan Castle is now a stunning architectural masterpiece,
							blending medieval and Renaissance styles. Its picturesque setting,
							surrounded by tranquil waters and majestic mountains, contributes
							to its timeless appeal. Today, visitors can explore the castle's
							magnificent interior, learn about its intriguing history, and
							enjoy the breathtaking views of Loch Duich. Eilean Donan Castle
							stands as a symbol of Scotland's heritage, captivating the
							imagination of all who visit. <br />
							<br />
							Before the construction of the more well-known Inveraray Castle,
							the home of Clan Campbell would be <strong>Innis Chonnel</strong>,
							a rocky island in the middle of Loch Awe. Becoming their
							stronghold by the year 1308, the castle would be passed to the
							family by the MacDougalls – the original owners and likely
							builders of the structure. This transfer of power would occur
							after the MacDougalls opposed the rule of the new king, Robert the
							Bruce, holding the island against him in 1308. Eventually, the
							MacDougalls would be defeated, with the castle and the Lordship of
							Loch Awe given to the Campbells, as the free barony was confirmed
							to Sir Colin Campbell in 1315. The Campbells would then use the
							castle as their base for over a century, refusing to move until
							the time of Colin Campbell, 1st Earl of Argyll, in the late 15th
							century. The Duke would make Inveraray his primary residence,
							constructing a new clan seat for one of the largest clans in the
							country. Meanwhile, the condition of Innis Chonnel would start to
							deteriorate, as it was used by the Campbells as a place of
							confinement for political and criminal prisoners. Sadly, the
							castle would continue to deteriorate over the subsequent years,
							eventually becoming overgrown and unrecognisable from its original
							state, it remains under the ownership of the Campbells of Argyll
							and is sadly not open to the public because of its poor condition,
							however, anyone looking for a closer look is welcome to hire a
							kayak and explore the surrounding waters on their own. <br />
							<br />
							<strong>Lochleven Castle</strong>, located on an island in Loch
							Leven in Scotland, holds a significant place in history. Dating
							back to the 14th century, it served as a royal residence and
							witnessed dramatic events, particularly during the reign of Mary,
							Queen of Scots. Mary was imprisoned in the castle after being
							forced to abdicate the throne. Her escape from Lochleven Castle in
							1568 marked a pivotal moment in Scottish history. The castle's
							ruins today offer a glimpse into its former grandeur, including
							the tower, walls, and courtyard. Accessible by boat, Lochleven
							Castle stands as a captivating historical site, where visitors can
							explore its storied past and appreciate the picturesque setting
							that surrounds it. <br />
							<br />
							<strong>Scone Palace</strong>, located near Perth in Scotland,
							holds a prominent place in Scottish history and heritage. The
							palace stands on the grounds of the ancient crowning place of
							Scottish kings, known as the Stone of Scone or Stone of Destiny.
							It was here that the kings of Scotland were traditionally
							enthroned. The original Scone Abbey, founded in the 12th century,
							was transformed into a grand palace in the 16th century. Scone
							Palace boasts stunning architecture and interiors, housing
							remarkable collections of art, antiques, and historical artifacts.
							The palace's grounds are equally captivating, featuring beautiful
							gardens and woodlands. Today, Scone Palace serves as a popular
							tourist attraction, offering visitors the opportunity to explore
							the rich history and royal connections of Scotland, while
							experiencing the splendor of this magnificent stately home. <br />{' '}
							<br />
							<strong>Castle Stalker</strong>, situated on a tidal islet in Loch
							Laich on the west coast of Scotland, is a captivating and
							picturesque fortress steeped in history. Dating back to the 14th
							century, the castle served as a stronghold for the MacDougall clan
							and later passed into the hands of the Stewart family. Castle
							Stalker played a role in various conflicts and power struggles
							throughout its history. Its striking appearance, with its dramatic
							setting against the backdrop of mountains and water, has made it
							an iconic symbol of Scotland. Today, Castle Stalker stands as a
							popular tourist destination, offering visitors the opportunity to
							admire its unique beauty and learn about its intriguing past.
							Access to the castle is limited, but the surrounding landscape
							provides stunning views and photo opportunities for those who
							venture to this remote and enchanting location. <br /> <br />
							<strong>Rosslyn Chapel</strong>, located in the village of Roslin
							near Edinburgh, Scotland, is a renowned architectural gem and a
							place shrouded in mystery and fascination. Built in the 15th
							century, Rosslyn Chapel is known for its exquisite stonework,
							intricate carvings, and rich symbolism. The chapel's ornate
							detailing features a wide range of motifs, including biblical
							scenes, mythical creatures, and intricate patterns. Its unique and
							enigmatic design has captivated visitors for centuries, inspiring
							numerous theories and legends, notably popularized by Dan Brown's
							novel, "The Da Vinci Code." Rosslyn Chapel's association with
							secret societies and its rumored connections to the Knights
							Templar and the Holy Grail have further contributed to its allure.
							Today, visitors can explore the chapel's interior, admire its
							remarkable craftsmanship, and delve into the historical and
							mythical narratives that surround this extraordinary place.
							Rosslyn Chapel stands as a testament to the intricacies of
							medieval architecture and continues to spark the imagination of
							all who visit.
						</div>
					</div>
				</div>
			</MotionAnimate>
		</div>
	);
};

export default Facts1;
