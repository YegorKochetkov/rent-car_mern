import React from 'react';
import tw from 'twin.macro';
import NavBar from 'app/containers/NavBar';
import TopSection from './TopSection';

const PageContainer = tw.div`
	flex
	flex-col
	items-center
	w-full
	h-full
`;

const Button = tw.button`
	m-1
	p-3
	rounded-md
	bg-slate-100
	shadow
	shadow-gray-400/50
	transition
	hover:shadow
	hover:shadow-gray-600/60
	active:shadow-inner
	active:shadow-gray-600/60
`;

const AccentSpan = tw.span`text-red-600`;

function HomePage() {
	return (
		<PageContainer>
			<NavBar />
			{/* <Button>
				Super button<AccentSpan>text</AccentSpan>
			</Button> */}
			<TopSection />
			<p>
				ducimus sunt placeat praesentium, recusandae natus inventore numquam
				atque itaque? Debitis, unde iusto adipisci enim aperiam dolore quae
				omnis. Inventore ipsum repellat ullam voluptates voluptatem mollitia
				eligendi fugit sit nisi suscipit! Amet officia nihil, sed exercitationem
				quis quam labore nesciunt velit veritatis minus blanditiis facere
				repudiandae dolores libero laboriosam. Voluptatem culpa quos iste
				exercitationem incidunt sit dolor debitis ducimus ad atque, quod ex
				reiciendis. Illo consequatur laboriosam deleniti corporis aperiam quis
				unde! Numquam, ea omnis labore reprehenderit odit porro! Quia odio quasi
				sint ea velit saepe aperiam possimus cupiditate ut repellat eum soluta,
				explicabo laborum, ab perspiciatis molestiae eos debitis vero corporis
				quaerat maiores! Facere ullam odio excepturi id! Voluptas quasi, cum rem
				nisi accusamus culpa ab, alias, ad quis ipsum hic. Repudiandae ut
				deserunt nostrum voluptatibus voluptate maxime illo id qui alias cum
				consequuntur ipsum ipsam, omnis autem? Natus fuga enim repellat quas
				facere cum odio dignissimos officia incidunt! Corporis dignissimos
				neque, dolore blanditiis porro unde consequatur incidunt quaerat nisi
				cumque obcaecati corrupti facilis sint suscipit labore quas. Animi quasi
				facere doloremque earum sunt ducimus fugit aliquam voluptatum, quae
				asperiores at voluptates eveniet delectus nam saepe ea modi? Provident
				ducimus mollitia quaerat saepe blanditiis corrupti nemo quasi
				repellendus. Est quaerat quia eos labore fugit, rerum ipsum hic
				voluptatibus blanditiis ea repellat laboriosam natus quas alias itaque
				iure? Incidunt dolores consequuntur perspiciatis ad quidem dolore amet
				ipsa non. Explicabo. Animi maiores quasi totam similique inventore
				obcaecati repellendus ducimus laboriosam ipsam error, autem ut minima
				recusandae fugiat repellat beatae reiciendis, corrupti, quas eveniet
				quis nam sunt? Similique necessitatibus mollitia nostrum? Eius molestiae
				enim id corporis explicabo maiores earum laboriosam, ab qui accusamus,
				blanditiis dolores accusantium sed perspiciatis rem quas totam? Dicta
				saepe aliquid deleniti consequuntur, sit obcaecati quam beatae corporis.
				Animi nemo delectus accusamus quod iusto nulla debitis officiis?
				Dolorem, ea voluptates dolore porro sed saepe minima atque quae fugit?
				Nam, at labore explicabo quos quaerat sint odit et aut. Dolor tempora
				voluptate vitae magni animi architecto est optio eum. Accusantium optio
				beatae earum. Ab hic accusantium necessitatibus placeat debitis odit
				soluta saepe ipsa sapiente illo culpa neque, esse non! Maxime illum, eum
				accusantium hic tempore earum similique perspiciatis quisquam
				consequuntur iusto ipsa corrupti praesentium repellendus excepturi rerum
				dolores voluptatum dolorum ducimus illo, nostrum fugiat tempora placeat
				voluptas. Tenetur, voluptatum. Repudiandae totam architecto perspiciatis
				voluptates sapiente aperiam quasi minus, obcaecati culpa dolorem
				pariatur minima consectetur nam id hic error dolores possimus veniam!
				Illo architecto odit laboriosam culpa sit fuga commodi! Ipsam, omnis
				incidunt suscipit hic quod deserunt accusamus deleniti facere aperiam
				recusandae ab vero fugiat quisquam cum sunt doloribus facilis nostrum,
				fugit nam accusantium unde? Perferendis, voluptatibus suscipit?
				Molestiae, quibusdam. Sed sequi porro error ipsa. Perspiciatis aliquid,
				voluptas consequuntur, omnis temporibus vitae veniam non natus nostrum
				doloremque consequatur placeat sint sit tempore quod laudantium nulla
				ullam adipisci deserunt repellat quasi. Nostrum consequuntur dolorum
				quasi dolore dignissimos reiciendis minima eligendi impedit esse
				possimus aliquid nihil ab temporibus blanditiis, placeat, velit ipsa
				enim consectetur delectus qui, quaerat provident! Animi blanditiis
				sapiente ex! Fuga assumenda aut quia sed quasi, molestiae delectus?
				Quidem sequi, voluptatum quasi voluptate eaque qui ducimus, maiores
				saepe, et veniam minus assumenda quibusdam! Fuga magni atque maiores
				quam nesciunt dignissimos! Placeat maiores voluptates temporibus beatae
				nam totam veniam odit, aperiam, corrupti excepturi, expedita debitis
				quibusdam magnam fugit mollitia eum at fugiat doloribus nostrum illo
				ratione. Aspernatur voluptas soluta fugit amet. Libero voluptates
				laudantium rerum quas mollitia totam vitae commodi molestiae sunt vel
				velit, architecto odit nisi dignissimos ea inventore praesentium
				consequuntur rem earum ipsam voluptas cum. Placeat voluptates illo aut?
				Necessitatibus voluptas eaque in dolorem tenetur? Cumque harum fugit
				optio debitis quam labore nihil eaque, sequi iusto tempora magni, sunt
				ad, sint voluptatem corrupti exercitationem qui asperiores officia?
				Doloribus, quibusdam. Sed quia rem accusantium corporis error
				praesentium, nesciunt autem, in nihil distinctio perspiciatis ex eveniet
				nostrum obcaecati facere, iusto dignissimos impedit sapiente quis
				consequuntur magnam nemo laboriosam? Omnis, delectus ducimus. Similique
				debitis magnam dicta ducimus vitae corporis sed iusto aut sequi
				asperiores at possimus enim, iste placeat impedit officiis, odit
				eligendi quas aliquid quidem aliquam. Iste velit consequatur fugit id!
				Corrupti sit suscipit molestias quod quas modi maiores fuga, unde
				dolores, molestiae non alias cumque impedit distinctio nam obcaecati
				inventore numquam temporibus. Ipsa, blanditiis minima. Corporis ducimus
				et modi nulla. Vitae deleniti iure nam mollitia accusantium, nulla
				officia! Quis voluptatibus nobis sint! Neque placeat corporis saepe a
				similique rem obcaecati delectus labore velit expedita officia
				reprehenderit, cum quo quam repudiandae? Veritatis temporibus magnam
				veniam iusto quam consequatur cum ullam? Delectus soluta neque aliquam
				quisquam sit inventore repellat, totam, maxime earum quos natus fugiat
				enim voluptatum vel non labore provident aspernatur! Cum vero nemo qui
				tempora, vel nisi! Totam cum iure vero tempore vel corporis, aperiam
				possimus deserunt distinctio qui repellendus, quibusdam velit voluptate
				explicabo soluta deleniti? Impedit quia quos dolorem. Corrupti incidunt
				magni atque nisi excepturi optio obcaecati delectus voluptatibus
				repellendus nulla voluptate illo numquam, ab dolor. Laboriosam veritatis
				ad dolor maiores cupiditate dolores officiis cum aperiam. Optio, alias
				voluptates.
			</p>
		</PageContainer>
	);
}

export default HomePage;
