import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs, TopPlay } from '../components';

import { useGetArtistDetailsQuery, useGetArtistTopQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
    const { id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);
    const { data: artistTopData, isFetching: isFetchingArtistTops } = useGetArtistTopQuery(artistId);

    if (isFetchingArtistDetails || isFetchingArtistTops) return <Loader title="Searching artist details" />;

    if (error) return <Error />;

    console.log(artistTopData.data)

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId={artistId} artistData={artistData.data[0]} />

            <RelatedSongs
                data={artistTopData.data}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
            />


        </div>
    );
};

export default ArtistDetails;