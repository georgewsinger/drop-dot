goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56323__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56324__i = 0, G__56324__a = new Array(arguments.length -  0);
while (G__56324__i < G__56324__a.length) {G__56324__a[G__56324__i] = arguments[G__56324__i + 0]; ++G__56324__i;}
  args = new cljs.core.IndexedSeq(G__56324__a,0);
} 
return G__56323__delegate.call(this,args);};
G__56323.cljs$lang$maxFixedArity = 0;
G__56323.cljs$lang$applyTo = (function (arglist__56325){
var args = cljs.core.seq(arglist__56325);
return G__56323__delegate(args);
});
G__56323.cljs$core$IFn$_invoke$arity$variadic = G__56323__delegate;
return G__56323;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56326__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56327__i = 0, G__56327__a = new Array(arguments.length -  0);
while (G__56327__i < G__56327__a.length) {G__56327__a[G__56327__i] = arguments[G__56327__i + 0]; ++G__56327__i;}
  args = new cljs.core.IndexedSeq(G__56327__a,0);
} 
return G__56326__delegate.call(this,args);};
G__56326.cljs$lang$maxFixedArity = 0;
G__56326.cljs$lang$applyTo = (function (arglist__56328){
var args = cljs.core.seq(arglist__56328);
return G__56326__delegate(args);
});
G__56326.cljs$core$IFn$_invoke$arity$variadic = G__56326__delegate;
return G__56326;
})()
;

return null;
});
