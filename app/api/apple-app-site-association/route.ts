import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "jp.co.cdjapan.app",
          paths: ["/deeplink/*"],
        },
      ],
    },
  });
};
