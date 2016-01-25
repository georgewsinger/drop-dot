goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49109__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49109 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49110__i = 0, G__49110__a = new Array(arguments.length -  0);
while (G__49110__i < G__49110__a.length) {G__49110__a[G__49110__i] = arguments[G__49110__i + 0]; ++G__49110__i;}
  args = new cljs.core.IndexedSeq(G__49110__a,0);
} 
return G__49109__delegate.call(this,args);};
G__49109.cljs$lang$maxFixedArity = 0;
G__49109.cljs$lang$applyTo = (function (arglist__49111){
var args = cljs.core.seq(arglist__49111);
return G__49109__delegate(args);
});
G__49109.cljs$core$IFn$_invoke$arity$variadic = G__49109__delegate;
return G__49109;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49112__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49113__i = 0, G__49113__a = new Array(arguments.length -  0);
while (G__49113__i < G__49113__a.length) {G__49113__a[G__49113__i] = arguments[G__49113__i + 0]; ++G__49113__i;}
  args = new cljs.core.IndexedSeq(G__49113__a,0);
} 
return G__49112__delegate.call(this,args);};
G__49112.cljs$lang$maxFixedArity = 0;
G__49112.cljs$lang$applyTo = (function (arglist__49114){
var args = cljs.core.seq(arglist__49114);
return G__49112__delegate(args);
});
G__49112.cljs$core$IFn$_invoke$arity$variadic = G__49112__delegate;
return G__49112;
})()
;

return null;
});
