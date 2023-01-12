/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as assert from 'assert';
import * as api from '@opentelemetry/api';
import { AlwaysOnSampler } from '../../../src/sampler/AlwaysOnSampler';

describe('AlwaysOnSampler', () => {
  it('should reflect sampler name', () => {
    const sampler = new AlwaysOnSampler();
    assert.strictEqual(sampler.toString(), 'AlwaysOnSampler');
  });

  it('should return api.SamplingDecision.RECORD_AND_SAMPLED for AlwaysOnSampler', () => {
    const sampler = new AlwaysOnSampler();
    assert.deepStrictEqual(sampler.shouldSample(api.ROOT_CONTEXT), {
      decision: api.SamplingDecision.RECORD_AND_SAMPLED,
      traceState: undefined,
    });
  });

  it('should forward the traceState', () => {
    const sampler = new AlwaysOnSampler();
    const traceState = api.createTraceState();
    assert.deepStrictEqual(
      sampler.shouldSample(
        api.trace.setSpanContext(api.ROOT_CONTEXT, {
          ...api.INVALID_SPAN_CONTEXT,
          traceState,
        })
      ).traceState,
      traceState
    );
  });
});
