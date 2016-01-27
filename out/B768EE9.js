goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__300689__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__300689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__300690__i = 0, G__300690__a = new Array(arguments.length -  0);
while (G__300690__i < G__300690__a.length) {G__300690__a[G__300690__i] = arguments[G__300690__i + 0]; ++G__300690__i;}
  args = new cljs.core.IndexedSeq(G__300690__a,0);
} 
return G__300689__delegate.call(this,args);};
G__300689.cljs$lang$maxFixedArity = 0;
G__300689.cljs$lang$applyTo = (function (arglist__300691){
var args = cljs.core.seq(arglist__300691);
return G__300689__delegate(args);
});
G__300689.cljs$core$IFn$_invoke$arity$variadic = G__300689__delegate;
return G__300689;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__300692__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__300692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__300693__i = 0, G__300693__a = new Array(arguments.length -  0);
while (G__300693__i < G__300693__a.length) {G__300693__a[G__300693__i] = arguments[G__300693__i + 0]; ++G__300693__i;}
  args = new cljs.core.IndexedSeq(G__300693__a,0);
} 
return G__300692__delegate.call(this,args);};
G__300692.cljs$lang$maxFixedArity = 0;
G__300692.cljs$lang$applyTo = (function (arglist__300694){
var args = cljs.core.seq(arglist__300694);
return G__300692__delegate(args);
});
G__300692.cljs$core$IFn$_invoke$arity$variadic = G__300692__delegate;
return G__300692;
})()
;

return null;
});
