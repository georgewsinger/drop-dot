// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__248907__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__248907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__248908__i = 0, G__248908__a = new Array(arguments.length -  0);
while (G__248908__i < G__248908__a.length) {G__248908__a[G__248908__i] = arguments[G__248908__i + 0]; ++G__248908__i;}
  args = new cljs.core.IndexedSeq(G__248908__a,0);
} 
return G__248907__delegate.call(this,args);};
G__248907.cljs$lang$maxFixedArity = 0;
G__248907.cljs$lang$applyTo = (function (arglist__248909){
var args = cljs.core.seq(arglist__248909);
return G__248907__delegate(args);
});
G__248907.cljs$core$IFn$_invoke$arity$variadic = G__248907__delegate;
return G__248907;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__248910__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__248910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__248911__i = 0, G__248911__a = new Array(arguments.length -  0);
while (G__248911__i < G__248911__a.length) {G__248911__a[G__248911__i] = arguments[G__248911__i + 0]; ++G__248911__i;}
  args = new cljs.core.IndexedSeq(G__248911__a,0);
} 
return G__248910__delegate.call(this,args);};
G__248910.cljs$lang$maxFixedArity = 0;
G__248910.cljs$lang$applyTo = (function (arglist__248912){
var args = cljs.core.seq(arglist__248912);
return G__248910__delegate(args);
});
G__248910.cljs$core$IFn$_invoke$arity$variadic = G__248910__delegate;
return G__248910;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map