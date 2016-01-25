goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49647__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49648__i = 0, G__49648__a = new Array(arguments.length -  0);
while (G__49648__i < G__49648__a.length) {G__49648__a[G__49648__i] = arguments[G__49648__i + 0]; ++G__49648__i;}
  args = new cljs.core.IndexedSeq(G__49648__a,0);
} 
return G__49647__delegate.call(this,args);};
G__49647.cljs$lang$maxFixedArity = 0;
G__49647.cljs$lang$applyTo = (function (arglist__49649){
var args = cljs.core.seq(arglist__49649);
return G__49647__delegate(args);
});
G__49647.cljs$core$IFn$_invoke$arity$variadic = G__49647__delegate;
return G__49647;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49650__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49651__i = 0, G__49651__a = new Array(arguments.length -  0);
while (G__49651__i < G__49651__a.length) {G__49651__a[G__49651__i] = arguments[G__49651__i + 0]; ++G__49651__i;}
  args = new cljs.core.IndexedSeq(G__49651__a,0);
} 
return G__49650__delegate.call(this,args);};
G__49650.cljs$lang$maxFixedArity = 0;
G__49650.cljs$lang$applyTo = (function (arglist__49652){
var args = cljs.core.seq(arglist__49652);
return G__49650__delegate(args);
});
G__49650.cljs$core$IFn$_invoke$arity$variadic = G__49650__delegate;
return G__49650;
})()
;

return null;
});
