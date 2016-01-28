goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51001__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51002__i = 0, G__51002__a = new Array(arguments.length -  0);
while (G__51002__i < G__51002__a.length) {G__51002__a[G__51002__i] = arguments[G__51002__i + 0]; ++G__51002__i;}
  args = new cljs.core.IndexedSeq(G__51002__a,0);
} 
return G__51001__delegate.call(this,args);};
G__51001.cljs$lang$maxFixedArity = 0;
G__51001.cljs$lang$applyTo = (function (arglist__51003){
var args = cljs.core.seq(arglist__51003);
return G__51001__delegate(args);
});
G__51001.cljs$core$IFn$_invoke$arity$variadic = G__51001__delegate;
return G__51001;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51004__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51005__i = 0, G__51005__a = new Array(arguments.length -  0);
while (G__51005__i < G__51005__a.length) {G__51005__a[G__51005__i] = arguments[G__51005__i + 0]; ++G__51005__i;}
  args = new cljs.core.IndexedSeq(G__51005__a,0);
} 
return G__51004__delegate.call(this,args);};
G__51004.cljs$lang$maxFixedArity = 0;
G__51004.cljs$lang$applyTo = (function (arglist__51006){
var args = cljs.core.seq(arglist__51006);
return G__51004__delegate(args);
});
G__51004.cljs$core$IFn$_invoke$arity$variadic = G__51004__delegate;
return G__51004;
})()
;

return null;
});
