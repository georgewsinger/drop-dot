goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62945__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62946__i = 0, G__62946__a = new Array(arguments.length -  0);
while (G__62946__i < G__62946__a.length) {G__62946__a[G__62946__i] = arguments[G__62946__i + 0]; ++G__62946__i;}
  args = new cljs.core.IndexedSeq(G__62946__a,0);
} 
return G__62945__delegate.call(this,args);};
G__62945.cljs$lang$maxFixedArity = 0;
G__62945.cljs$lang$applyTo = (function (arglist__62947){
var args = cljs.core.seq(arglist__62947);
return G__62945__delegate(args);
});
G__62945.cljs$core$IFn$_invoke$arity$variadic = G__62945__delegate;
return G__62945;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62948__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62949__i = 0, G__62949__a = new Array(arguments.length -  0);
while (G__62949__i < G__62949__a.length) {G__62949__a[G__62949__i] = arguments[G__62949__i + 0]; ++G__62949__i;}
  args = new cljs.core.IndexedSeq(G__62949__a,0);
} 
return G__62948__delegate.call(this,args);};
G__62948.cljs$lang$maxFixedArity = 0;
G__62948.cljs$lang$applyTo = (function (arglist__62950){
var args = cljs.core.seq(arglist__62950);
return G__62948__delegate(args);
});
G__62948.cljs$core$IFn$_invoke$arity$variadic = G__62948__delegate;
return G__62948;
})()
;

return null;
});
