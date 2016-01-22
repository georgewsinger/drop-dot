goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31441__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31442__i = 0, G__31442__a = new Array(arguments.length -  0);
while (G__31442__i < G__31442__a.length) {G__31442__a[G__31442__i] = arguments[G__31442__i + 0]; ++G__31442__i;}
  args = new cljs.core.IndexedSeq(G__31442__a,0);
} 
return G__31441__delegate.call(this,args);};
G__31441.cljs$lang$maxFixedArity = 0;
G__31441.cljs$lang$applyTo = (function (arglist__31443){
var args = cljs.core.seq(arglist__31443);
return G__31441__delegate(args);
});
G__31441.cljs$core$IFn$_invoke$arity$variadic = G__31441__delegate;
return G__31441;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31444__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31445__i = 0, G__31445__a = new Array(arguments.length -  0);
while (G__31445__i < G__31445__a.length) {G__31445__a[G__31445__i] = arguments[G__31445__i + 0]; ++G__31445__i;}
  args = new cljs.core.IndexedSeq(G__31445__a,0);
} 
return G__31444__delegate.call(this,args);};
G__31444.cljs$lang$maxFixedArity = 0;
G__31444.cljs$lang$applyTo = (function (arglist__31446){
var args = cljs.core.seq(arglist__31446);
return G__31444__delegate(args);
});
G__31444.cljs$core$IFn$_invoke$arity$variadic = G__31444__delegate;
return G__31444;
})()
;

return null;
});
