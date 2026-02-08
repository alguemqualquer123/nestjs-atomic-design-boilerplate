import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('Health Check', () => {
    it('/ (GET) - should return boilerplate info', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('message');
          expect(res.body).toHaveProperty('metadata');
          expect(res.body.metadata).toHaveProperty('author', 'SR VINIX');
          expect(res.body.metadata).toHaveProperty(
            'architecture',
            'Atomic Design',
          );
          expect(res.body.metadata).toHaveProperty('framework', 'NestJS');
          expect(res.body.message).toContain('⭐');
          expect(res.body.message).toContain(
            'NestJS Atomic Design Boilerplate',
          );
        });
    });

    it('/ (GET) - should have correct response structure', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect((res) => {
          const { message, metadata } = res.body;

          expect(typeof message).toBe('string');
          expect(message.length).toBeGreaterThan(0);

          expect(typeof metadata).toBe('object');
          expect(metadata).toHaveProperty('version');
          expect(metadata).toHaveProperty('author');
          expect(metadata).toHaveProperty('github');
          expect(metadata).toHaveProperty('architecture');
          expect(metadata).toHaveProperty('framework');
          expect(metadata).toHaveProperty('stars');
        });
    });
  });

  describe('CORS Headers', () => {
    it('/ (GET) - should include CORS headers', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Access-Control-Allow-Origin', '*')
        .expect(
          'Access-Control-Allow-Methods',
          /GET|POST|PUT|DELETE|PATCH|OPTIONS/,
        )
        .expect(
          'Access-Control-Allow-Headers',
          /Content-Type|Authorization|X-Requested-With/,
        );
    });

    it('/ OPTIONS - should handle preflight requests', () => {
      return request(app.getHttpServer())
        .options('/')
        .expect(204)
        .expect('Access-Control-Allow-Origin', '*')
        .expect(
          'Access-Control-Allow-Methods',
          /GET|POST|PUT|DELETE|PATCH|OPTIONS/,
        )
        .expect(
          'Access-Control-Allow-Headers',
          /Content-Type|Authorization|X-Requested-With/,
        );
    });
  });

  describe('Error Handling', () => {
    it('/nonexistent (GET) - should return 404', () => {
      return request(app.getHttpServer())
        .get('/nonexistent')
        .expect(404)
        .expect((res) => {
          expect(res.body).toHaveProperty('statusCode', 404);
          expect(res.body).toHaveProperty('message');
          expect(res.body).toHaveProperty('timestamp');
        });
    });
  });

  describe('Content Type', () => {
    it('/ (GET) - should return JSON content type', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/);
    });
  });

  describe('Response Time', () => {
    it('/ (GET) - should respond within reasonable time', async () => {
      const start = Date.now();

      await request(app.getHttpServer()).get('/').expect(200);

      const responseTime = Date.now() - start;
      expect(responseTime).toBeLessThan(1000); // Should respond within 1 second
    });
  });
});
