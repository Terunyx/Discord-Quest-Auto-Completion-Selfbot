import { Constants } from './constants';
import { CaptchaDataFromRequest } from './interface';
import { YesCaptchaSolver } from './providers/yescaptcha';

let yesCaptchaClient: YesCaptchaSolver | null = null;

if (process.env.YES_CAPTCHA_API_KEY) {
	console.log('YesCaptcha API key found. Captcha solving is enabled.');
	yesCaptchaClient = new YesCaptchaSolver(process.env.YES_CAPTCHA_API_KEY);
}

export function solveCaptcha(data: CaptchaDataFromRequest): Promise<string> {
	// todo: implement captcha solving using 3rd party services like yescaptcha
	if (yesCaptchaClient) {
		return yesCaptchaClient
			.hcaptcha(data.captcha_sitekey, 'https://discord.com', {
				rqdata: data.captcha_rqdata,
				isInvisible: true,
				userAgent: Constants.USER_AGENT,
			})
			.then((result) => result.gRecaptchaResponse);
	}
	return Promise.reject(new Error('Captcha solving not implemented yet.'));
}
