goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__301213__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__301213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__301214__i = 0, G__301214__a = new Array(arguments.length -  0);
while (G__301214__i < G__301214__a.length) {G__301214__a[G__301214__i] = arguments[G__301214__i + 0]; ++G__301214__i;}
  args = new cljs.core.IndexedSeq(G__301214__a,0);
} 
return G__301213__delegate.call(this,args);};
G__301213.cljs$lang$maxFixedArity = 0;
G__301213.cljs$lang$applyTo = (function (arglist__301215){
var args = cljs.core.seq(arglist__301215);
return G__301213__delegate(args);
});
G__301213.cljs$core$IFn$_invoke$arity$variadic = G__301213__delegate;
return G__301213;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__301216__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__301216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__301217__i = 0, G__301217__a = new Array(arguments.length -  0);
while (G__301217__i < G__301217__a.length) {G__301217__a[G__301217__i] = arguments[G__301217__i + 0]; ++G__301217__i;}
  args = new cljs.core.IndexedSeq(G__301217__a,0);
} 
return G__301216__delegate.call(this,args);};
G__301216.cljs$lang$maxFixedArity = 0;
G__301216.cljs$lang$applyTo = (function (arglist__301218){
var args = cljs.core.seq(arglist__301218);
return G__301216__delegate(args);
});
G__301216.cljs$core$IFn$_invoke$arity$variadic = G__301216__delegate;
return G__301216;
})()
;

return null;
});
