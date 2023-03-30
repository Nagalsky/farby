import Meta from "@/components/seo/Meta";
import { signOut, useSession } from "next-auth/react";
import { FC, useEffect } from "react";

const Home: FC = () => {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <>
      <Meta title="L&Š Obchodné centrum Nitra - farby-laky, železiarstvo, stavebniny" />

      <section className="py-8">
        <div className="container">
          <h1>Home page</h1>

          {/* <p className="bg-red-500">{process.env.GOOGLE_ID}</p> */}

          {session?.user && (
            <>
              <button
                onClick={() =>
                  signOut({
                    callbackUrl: `${window.location.origin}`,
                  })
                }
                className="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Logout
              </button>

              <div className="mb-6 break-all">
                <pre className="whitespace-pre-wrap">
                  {JSON.stringify(session, null, 2)}
                </pre>
              </div>
            </>
          )}

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minima, rem illo aspernatur aperiam molestias delectus id
            voluptatibus vitae voluptatum quae dolore nemo consequatur, porro
            culpa a error adipisci perspiciatis, quia fuga doloribus animi
            provident cupiditate! Facere, consequatur ipsum asperiores libero
            expedita soluta saepe maxime odio facilis fugiat iste unde id ipsa.
            Repellat accusantium hic eaque ullam impedit nulla error, et sed
            earum quibusdam iure aspernatur explicabo fugiat architecto suscipit
            perferendis laboriosam. Corrupti praesentium dolorum tempore labore
            quam animi, dolorem sit enim sapiente ducimus voluptatum iusto
            quidem commodi explicabo blanditiis quo velit soluta? Nobis veniam
            laudantium ipsum voluptatem dolorem error velit accusamus et nostrum
            laborum? Nobis porro reiciendis inventore, asperiores aspernatur
            ipsa explicabo distinctio in facilis ducimus veritatis nam pariatur
            officiis nihil eaque nemo consequuntur, qui earum dolor id aliquam
            laborum adipisci excepturi? Quisquam totam libero error accusantium
            placeat! Est ab perspiciatis non necessitatibus reprehenderit
            repudiandae molestiae porro adipisci minus dolorem aliquid
            exercitationem amet quod consequuntur ducimus, voluptatum et. Hic
            alias eius repellendus, corrupti inventore debitis dolores, cum,
            eaque incidunt libero consequatur accusamus amet culpa doloribus
            nulla exercitationem! Provident, natus dicta dolor laborum earum in
            officiis iusto magnam voluptatem, aut nulla ipsa, ad voluptatibus
            corporis modi? Doloribus, quisquam quos quaerat non aut rem animi
            cumque veniam voluptatibus fugit accusantium, eveniet quae inventore
            eligendi obcaecati. Dignissimos quidem corporis similique pariatur
            numquam rerum rem, fuga repellendus nulla omnis molestias eos velit
            minus deleniti earum, nisi quo quae, laboriosam nostrum beatae?
            Consequuntur repudiandae iure optio saepe exercitationem qui autem,
            ad provident eaque, tempora hic perspiciatis. Tempore corporis modi
            blanditiis officia illo eaque iure quisquam voluptatem
            exercitationem, dolores sit perspiciatis. Soluta reprehenderit odit
            velit nihil numquam eius in ab, quidem expedita neque, animi tenetur
            corporis, eveniet perspiciatis quod architecto obcaecati impedit
            magni reiciendis labore. Ratione iste aut consequuntur neque harum
            laborum ut consequatur nihil quisquam tempore molestias totam sunt
            illum quod fugiat, est magnam repudiandae dicta ad quas placeat
            tenetur id. Molestias voluptas nesciunt ad quo mollitia vel!
            Consectetur illo asperiores veniam veritatis dicta qui nulla
            consequatur assumenda facilis. Vel praesentium sint suscipit omnis
            corporis vitae quo, accusantium inventore ad veritatis earum odio at
            esse amet corrupti voluptatem dicta iure quas illum? Placeat,
            delectus quaerat architecto veniam perspiciatis corporis, magni,
            quia dolore in natus tenetur. Ad reiciendis, iure cupiditate
            excepturi illo nisi blanditiis sit obcaecati odit illum veniam
            facere quasi porro, nulla ut explicabo autem, quos ullam
            consequatur. Quis, esse eos. Eos voluptates quaerat commodi cumque
            dicta soluta at eaque consequuntur officia error odit, dolor
            mollitia vitae qui assumenda quia? Voluptates ut, obcaecati unde
            laudantium porro nostrum earum soluta doloribus provident. Modi
            nesciunt minima beatae! Laudantium harum error hic officia sit porro
            sed vel est facilis assumenda, repellendus impedit repellat ex
            aliquid eveniet animi maiores eius, totam nulla ea quidem eaque nemo
            tenetur. Modi rerum odit soluta culpa qui doloribus quae harum nobis
            debitis. Corporis voluptatem blanditiis accusamus autem, eveniet
            debitis commodi perferendis accusantium, qui, maxime facere
            voluptatum suscipit deserunt magni nobis sed sit repellendus minus
            eius ducimus excepturi fugiat quod. Quo quia, minus explicabo autem
            blanditiis ab in, neque inventore nemo impedit quidem molestiae,
            eveniet porro? Explicabo suscipit doloremque facilis quisquam culpa
            mollitia ea facere ex ab harum nisi voluptatem quae laboriosam
            repellendus placeat, consequuntur optio reiciendis temporibus
            reprehenderit quaerat at, doloribus fugiat. Esse aspernatur dicta
            omnis nisi voluptatum quis voluptate provident praesentium, rem
            atque amet facilis fugit commodi optio, architecto recusandae autem
            veniam placeat at repudiandae quidem ipsa illo! Eligendi eius
            laboriosam labore dolore eum provident voluptate, atque ratione.
            Quam, soluta dolorum, error nobis facilis fuga necessitatibus
            recusandae perspiciatis sed, consequatur facere quae aperiam et?
            Deleniti inventore sed quae vero totam eveniet nam. Sint, id
            ratione. Dolor ut adipisci, sint nostrum animi alias! Eveniet in
            reprehenderit cumque reiciendis unde aliquid hic sunt temporibus,
            perspiciatis quod, libero atque nobis excepturi id iure. Consequatur
            nobis culpa ex dicta dignissimos suscipit aliquam magni praesentium
            dolores libero atque quaerat esse obcaecati tenetur architecto quasi
            consectetur, odio laborum. Accusantium architecto perspiciatis qui
            quibusdam voluptatem dignissimos odio, facere voluptates fuga
            nesciunt beatae? Facere sunt, sint voluptates enim doloribus maxime
            nesciunt aut! Error enim sunt voluptas odit iste commodi ratione a
            recusandae eligendi possimus fugit, in cum quos distinctio adipisci
            doloribus porro voluptatem minima! Et adipisci maxime quas nisi
            dolor possimus. Aspernatur dolore laudantium ratione quia excepturi
            tempora ipsum aliquid, explicabo voluptas delectus non natus velit.
            Corporis impedit dolorum eveniet soluta deleniti aut pariatur,
            consectetur minus, labore molestiae voluptatibus repellendus, error
            aperiam cupiditate maxime esse! Ut nesciunt inventore modi illo
            dolorum consequatur? Vero nostrum doloribus deleniti alias placeat
            consequuntur porro animi, officia non eius veritatis dolores est
            adipisci mollitia, tenetur possimus. Pariatur ex aperiam in totam,
            eligendi expedita cum asperiores, quae neque voluptas iure. Deleniti
            labore molestiae voluptatibus sit sequi, ullam doloremque odit saepe
            id eveniet expedita ipsam est aliquid ducimus? Quis laboriosam fugit
            repellat laborum voluptatum dolorum veniam, molestias corrupti optio
            porro. Nihil, suscipit repellat vel illum sed dolores pariatur,
            exercitationem illo distinctio sit corrupti repellendus deleniti
            quis deserunt temporibus cum magni tempore aliquid praesentium,
            dolor consequuntur. Dicta accusantium tempora exercitationem commodi
            harum quas consequuntur dolores, sapiente ipsam quod esse dolorem
            fugit obcaecati earum, a nulla. Ad quasi, aperiam aspernatur
            pariatur eum sunt iusto aut laboriosam quos blanditiis incidunt
            natus asperiores nemo ex iure, nostrum officiis consequatur maxime
            illum, eligendi sit. Dolorem perferendis sapiente laboriosam sunt
            fugiat hic porro ipsum, ab itaque nulla magnam commodi veritatis in?
            Quo id ea illo tempore. Officiis fugit adipisci, optio quis autem
            unde veniam esse impedit quae consectetur dolor laboriosam, iure
            maiores soluta quas est commodi hic quibusdam distinctio! Officia
            ut, nostrum qui dolores unde quasi consectetur modi temporibus
            placeat maxime, aliquid quod velit dolor quas? Id iusto, atque
            suscipit doloremque dicta officiis sed provident aperiam perferendis
            delectus! Facere enim similique deleniti sequi odit repudiandae
            perspiciatis laboriosam eum minus, nemo, dolorum ullam unde in
            placeat. Velit, facere odio? Dolorem minus et animi ex porro sint
            beatae dolores, eos eveniet sunt facere quis nisi nobis mollitia
            eligendi molestias, deleniti impedit molestiae iure ipsum ut in
            nesciunt magni culpa. Fugit illum maxime eum sed?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            totam ad obcaecati aspernatur nulla reiciendis natus? Iste tempora
            dicta nulla optio, labore cum at qui consequatur, molestiae
            recusandae dolor modi porro rerum exercitationem. Alias soluta ipsa
            esse debitis quisquam eveniet similique dolore possimus cum aut
            sequi vero quis provident repudiandae eos reiciendis, cupiditate
            commodi, odio architecto harum eius. Unde a illo, minima iure quidem
            accusamus cumque sapiente aperiam ipsam quaerat, quibusdam nesciunt
            vel eum cum dolorem distinctio. Ut aperiam, id tenetur quidem
            molestias magni quia rerum dignissimos illo magnam quae. Fugiat
            obcaecati placeat dolorem consequuntur repellendus iusto unde
            pariatur nostrum?
          </p>
          <p>
            Corporis fugiat eius voluptas odio quae quibusdam ea esse aut
            eveniet amet alias velit, numquam exercitationem vero, nostrum,
            distinctio ad? Cum nesciunt rerum animi incidunt reprehenderit
            officia commodi tenetur, doloribus dolorum unde, libero ea inventore
            voluptas expedita! Quas labore nulla amet ea laborum hic ratione
            velit, molestiae voluptas corrupti ex laudantium fuga eligendi at
            necessitatibus ipsum! Reiciendis fuga voluptatem provident nisi
            saepe harum cumque doloribus fugiat possimus asperiores doloremque,
            ex alias optio sunt vitae dolorem est nihil repudiandae tempore
            expedita incidunt quos. Suscipit quidem nihil autem. Similique
            fugiat numquam officiis distinctio eligendi, aut ad, illum corporis
            nemo modi dolor voluptatum?
          </p>
          <p>
            Nulla eveniet alias similique, ipsam consectetur rem officia maxime
            inventore et voluptate soluta debitis veniam vitae in voluptates
            voluptatum, quasi fuga sit sequi ea laudantium. Ex unde consequuntur
            enim odit saepe? Tempore inventore nisi consequatur minima repellat,
            iste repellendus porro aspernatur praesentium, aliquid hic tempora
            at odit illo corporis, aliquam totam deleniti illum iusto earum?
            Sapiente ipsa amet quam, iure non voluptatum. Tempora optio maiores,
            dignissimos, sapiente nisi ut commodi dicta totam iste inventore
            officiis dolore vero expedita nesciunt voluptatibus numquam omnis
            odit? Saepe, doloremque eum voluptates qui tempora iusto culpa rem
            voluptatem sed ea aliquid animi adipisci eaque accusamus!
          </p>
          <p>
            Aliquid voluptatum culpa ducimus tenetur fugit error tempore earum
            incidunt, ipsa aut eos placeat, magnam illum exercitationem ab nemo
            non dolore eum distinctio enim. Nemo minima quae a tenetur ad
            cupiditate repellat ut accusantium enim mollitia quasi expedita,
            laudantium facilis. Itaque, animi. Pariatur cupiditate optio tempore
            deserunt modi nisi doloribus, rerum at nostrum officia quam
            explicabo! Cumque quibusdam eligendi dolores quaerat, aliquam ab?
            Ab, distinctio. Illum tempore debitis, labore aliquam quasi
            accusantium dicta a quisquam repellendus dolores delectus
            perspiciatis nam dolore minima cupiditate deserunt? Adipisci
            blanditiis enim deleniti cumque placeat. Ea unde saepe quae aperiam
            cumque et repellat temporibus earum?
          </p>
          <p>
            Odit impedit voluptas vel voluptate non deleniti earum porro modi
            incidunt laudantium iusto, itaque soluta libero veritatis iure eaque
            sapiente fugiat, quod accusantium delectus recusandae amet. Deserunt
            fugiat ex mollitia dolore labore suscipit, itaque eveniet expedita
            dolorem ea soluta explicabo earum minus eius rerum voluptatibus
            maiores quos delectus, dolorum, odit autem harum cumque vitae!
            Natus, inventore amet? Fugit voluptates atque quod vero magni illo
            expedita minima odit saepe sed enim, quos ullam veniam, facilis
            iusto quo quam! Vitae repellendus maiores ratione maxime est
            consequuntur repudiandae a beatae autem iusto in, velit ad sint
            inventore voluptate tenetur quos, ipsum reprehenderit natus.
          </p>
          <p>
            Earum sunt facere voluptatem velit maiores eius quas corporis, dolor
            harum assumenda reiciendis debitis suscipit laudantium alias
            deleniti ut culpa, tenetur sapiente? Ad similique voluptatum
            praesentium distinctio! Deserunt vel quisquam adipisci praesentium
            sapiente, minima, aliquam ipsum nobis dolorem repudiandae repellat
            modi iste. Itaque magni quis facere, veniam exercitationem neque
            quae sapiente consectetur illo dignissimos, nulla, accusamus id est
            dolorem at doloribus nobis voluptatum eos ratione. Libero totam, in,
            rerum soluta nostrum culpa, eos dolorem ex laborum vitae iste ullam
            rem ducimus ea aliquam vel sit molestiae quis! Debitis error sunt
            sapiente ut illo ex veritatis aspernatur eligendi corrupti. Quod,
            magnam.
          </p>
          <p>
            Suscipit odit earum excepturi voluptas vero a sapiente ad beatae.
            Aliquid consequatur repellat, esse quos ullam doloremque nihil
            pariatur blanditiis nam doloribus. Temporibus dolor quasi illum
            necessitatibus eos eaque ex fugiat porro enim. Reiciendis excepturi
            tenetur nostrum ipsam placeat a inventore delectus molestiae et
            voluptates ea minima quis harum illo, nisi aut optio impedit. Vel
            velit consequatur cupiditate laudantium vitae fuga nemo autem
            suscipit. Nobis officia ad numquam explicabo, labore asperiores
            quaerat! Veniam, officia culpa ratione totam error ipsa porro ipsam
            reiciendis! Debitis architecto alias, quod, dolor esse non unde modi
            autem culpa molestiae corporis praesentium voluptates repellendus,
            ut reprehenderit?
          </p>
          <p>
            Tempore eos corrupti perspiciatis et ea obcaecati veritatis, rerum
            commodi! Odio autem pariatur, eum magnam aliquid placeat assumenda
            unde? Nesciunt fugiat veritatis, consequatur doloribus labore
            aliquid possimus accusamus quas assumenda error id culpa eligendi
            praesentium, qui eveniet, quo iusto minima. Quis architecto fugiat
            nobis! Itaque optio, rerum tempora culpa laudantium ipsa,
            perferendis atque recusandae id doloribus quam exercitationem aut
            repudiandae consequatur officia, ex earum natus neque!
            Reprehenderit, eaque. Porro officiis quo quod dolores expedita.
            Optio rem illum fugiat non veniam unde sapiente ipsa sit quae harum
            incidunt possimus, consectetur architecto, totam molestiae
            exercitationem expedita. Aut atque maiores quam pariatur? Odit.
          </p>
          <p>
            Laudantium facilis error blanditiis cum consectetur ipsum nobis,
            labore cumque alias sapiente architecto animi similique magni
            provident quos quisquam repudiandae ducimus maxime id! In expedita
            eum quae ex soluta modi architecto, quo, reprehenderit esse
            quibusdam vero ab perferendis non dolore id excepturi culpa.
            Voluptate incidunt dignissimos quam explicabo ullam est eos dolor
            molestias fuga sunt? Ratione deleniti necessitatibus odit vero
            nesciunt amet quibusdam laudantium cum officiis enim natus porro,
            nam debitis aspernatur repellendus fuga quisquam? Velit eaque odit
            doloremque impedit deleniti vel qui porro quisquam soluta, ab dolore
            placeat accusantium amet consequuntur! Provident expedita illo
            corporis cupiditate soluta, nobis officia.
          </p>
          <p>
            Mollitia qui odio omnis laborum ipsum maxime, praesentium quis
            ullam, minus ducimus facilis accusamus! Cupiditate obcaecati non
            nemo eaque, sunt, veniam quidem voluptatibus numquam eveniet
            deserunt magni, voluptatum in? Saepe accusamus ab maiores! Id quia
            velit ab consectetur nam fuga saepe, sint similique porro
            accusantium expedita ad. Repudiandae magnam minima, sunt iste iure
            in? Voluptate quasi corporis voluptatibus sed, labore perspiciatis
            porro, ea neque aliquam iusto suscipit eveniet tempore quis
            provident dolore? Quia asperiores tempore eum qui, commodi tempora
            illum nulla placeat ipsam ab explicabo quod distinctio dolorum
            pariatur reprehenderit vero voluptate impedit quisquam porro
            recusandae odio officia delectus iure.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
