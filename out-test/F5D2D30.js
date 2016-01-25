goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30649__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30650__i = 0, G__30650__a = new Array(arguments.length -  0);
while (G__30650__i < G__30650__a.length) {G__30650__a[G__30650__i] = arguments[G__30650__i + 0]; ++G__30650__i;}
  args = new cljs.core.IndexedSeq(G__30650__a,0);
} 
return G__30649__delegate.call(this,args);};
G__30649.cljs$lang$maxFixedArity = 0;
G__30649.cljs$lang$applyTo = (function (arglist__30651){
var args = cljs.core.seq(arglist__30651);
return G__30649__delegate(args);
});
G__30649.cljs$core$IFn$_invoke$arity$variadic = G__30649__delegate;
return G__30649;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30652__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30653__i = 0, G__30653__a = new Array(arguments.length -  0);
while (G__30653__i < G__30653__a.length) {G__30653__a[G__30653__i] = arguments[G__30653__i + 0]; ++G__30653__i;}
  args = new cljs.core.IndexedSeq(G__30653__a,0);
} 
return G__30652__delegate.call(this,args);};
G__30652.cljs$lang$maxFixedArity = 0;
G__30652.cljs$lang$applyTo = (function (arglist__30654){
var args = cljs.core.seq(arglist__30654);
return G__30652__delegate(args);
});
G__30652.cljs$core$IFn$_invoke$arity$variadic = G__30652__delegate;
return G__30652;
})()
;

return null;
});
