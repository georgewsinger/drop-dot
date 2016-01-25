goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27969__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27970__i = 0, G__27970__a = new Array(arguments.length -  0);
while (G__27970__i < G__27970__a.length) {G__27970__a[G__27970__i] = arguments[G__27970__i + 0]; ++G__27970__i;}
  args = new cljs.core.IndexedSeq(G__27970__a,0);
} 
return G__27969__delegate.call(this,args);};
G__27969.cljs$lang$maxFixedArity = 0;
G__27969.cljs$lang$applyTo = (function (arglist__27971){
var args = cljs.core.seq(arglist__27971);
return G__27969__delegate(args);
});
G__27969.cljs$core$IFn$_invoke$arity$variadic = G__27969__delegate;
return G__27969;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27972__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27973__i = 0, G__27973__a = new Array(arguments.length -  0);
while (G__27973__i < G__27973__a.length) {G__27973__a[G__27973__i] = arguments[G__27973__i + 0]; ++G__27973__i;}
  args = new cljs.core.IndexedSeq(G__27973__a,0);
} 
return G__27972__delegate.call(this,args);};
G__27972.cljs$lang$maxFixedArity = 0;
G__27972.cljs$lang$applyTo = (function (arglist__27974){
var args = cljs.core.seq(arglist__27974);
return G__27972__delegate(args);
});
G__27972.cljs$core$IFn$_invoke$arity$variadic = G__27972__delegate;
return G__27972;
})()
;

return null;
});
