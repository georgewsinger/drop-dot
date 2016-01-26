goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__283235__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__283235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__283236__i = 0, G__283236__a = new Array(arguments.length -  0);
while (G__283236__i < G__283236__a.length) {G__283236__a[G__283236__i] = arguments[G__283236__i + 0]; ++G__283236__i;}
  args = new cljs.core.IndexedSeq(G__283236__a,0);
} 
return G__283235__delegate.call(this,args);};
G__283235.cljs$lang$maxFixedArity = 0;
G__283235.cljs$lang$applyTo = (function (arglist__283237){
var args = cljs.core.seq(arglist__283237);
return G__283235__delegate(args);
});
G__283235.cljs$core$IFn$_invoke$arity$variadic = G__283235__delegate;
return G__283235;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__283238__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__283238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__283239__i = 0, G__283239__a = new Array(arguments.length -  0);
while (G__283239__i < G__283239__a.length) {G__283239__a[G__283239__i] = arguments[G__283239__i + 0]; ++G__283239__i;}
  args = new cljs.core.IndexedSeq(G__283239__a,0);
} 
return G__283238__delegate.call(this,args);};
G__283238.cljs$lang$maxFixedArity = 0;
G__283238.cljs$lang$applyTo = (function (arglist__283240){
var args = cljs.core.seq(arglist__283240);
return G__283238__delegate(args);
});
G__283238.cljs$core$IFn$_invoke$arity$variadic = G__283238__delegate;
return G__283238;
})()
;

return null;
});
