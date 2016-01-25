goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27269__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27270__i = 0, G__27270__a = new Array(arguments.length -  0);
while (G__27270__i < G__27270__a.length) {G__27270__a[G__27270__i] = arguments[G__27270__i + 0]; ++G__27270__i;}
  args = new cljs.core.IndexedSeq(G__27270__a,0);
} 
return G__27269__delegate.call(this,args);};
G__27269.cljs$lang$maxFixedArity = 0;
G__27269.cljs$lang$applyTo = (function (arglist__27271){
var args = cljs.core.seq(arglist__27271);
return G__27269__delegate(args);
});
G__27269.cljs$core$IFn$_invoke$arity$variadic = G__27269__delegate;
return G__27269;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27272__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27273__i = 0, G__27273__a = new Array(arguments.length -  0);
while (G__27273__i < G__27273__a.length) {G__27273__a[G__27273__i] = arguments[G__27273__i + 0]; ++G__27273__i;}
  args = new cljs.core.IndexedSeq(G__27273__a,0);
} 
return G__27272__delegate.call(this,args);};
G__27272.cljs$lang$maxFixedArity = 0;
G__27272.cljs$lang$applyTo = (function (arglist__27274){
var args = cljs.core.seq(arglist__27274);
return G__27272__delegate(args);
});
G__27272.cljs$core$IFn$_invoke$arity$variadic = G__27272__delegate;
return G__27272;
})()
;

return null;
});
