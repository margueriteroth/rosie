import React from "react";
import Emoji from "components/_ui/Emoji/Emoji";
import Layout from "components/Layout/Layout";
import Link from "components/_ui/Link/Link";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";

const Writing = () => (
    <Layout>
        <MaxWidth>
            <h1>
                Writing
            </h1>
            <p>
                Hello world!
            </p>
            <Link to="/writing/part-1-setting-up-our-development-environment">
                Part 1: Setting up our environment! <Emoji name="party popper" />
            </Link>
        </MaxWidth>
    </Layout>
)

export default Writing;