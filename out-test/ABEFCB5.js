goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14000__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14001__i = 0, G__14001__a = new Array(arguments.length -  0);
while (G__14001__i < G__14001__a.length) {G__14001__a[G__14001__i] = arguments[G__14001__i + 0]; ++G__14001__i;}
  args = new cljs.core.IndexedSeq(G__14001__a,0);
} 
return G__14000__delegate.call(this,args);};
G__14000.cljs$lang$maxFixedArity = 0;
G__14000.cljs$lang$applyTo = (function (arglist__14002){
var args = cljs.core.seq(arglist__14002);
return G__14000__delegate(args);
});
G__14000.cljs$core$IFn$_invoke$arity$variadic = G__14000__delegate;
return G__14000;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14003__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14004__i = 0, G__14004__a = new Array(arguments.length -  0);
while (G__14004__i < G__14004__a.length) {G__14004__a[G__14004__i] = arguments[G__14004__i + 0]; ++G__14004__i;}
  args = new cljs.core.IndexedSeq(G__14004__a,0);
} 
return G__14003__delegate.call(this,args);};
G__14003.cljs$lang$maxFixedArity = 0;
G__14003.cljs$lang$applyTo = (function (arglist__14005){
var args = cljs.core.seq(arglist__14005);
return G__14003__delegate(args);
});
G__14003.cljs$core$IFn$_invoke$arity$variadic = G__14003__delegate;
return G__14003;
})()
;

return null;
});
