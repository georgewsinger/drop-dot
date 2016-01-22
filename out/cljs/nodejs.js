// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40361__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40362__i = 0, G__40362__a = new Array(arguments.length -  0);
while (G__40362__i < G__40362__a.length) {G__40362__a[G__40362__i] = arguments[G__40362__i + 0]; ++G__40362__i;}
  args = new cljs.core.IndexedSeq(G__40362__a,0);
} 
return G__40361__delegate.call(this,args);};
G__40361.cljs$lang$maxFixedArity = 0;
G__40361.cljs$lang$applyTo = (function (arglist__40363){
var args = cljs.core.seq(arglist__40363);
return G__40361__delegate(args);
});
G__40361.cljs$core$IFn$_invoke$arity$variadic = G__40361__delegate;
return G__40361;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40364__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40365__i = 0, G__40365__a = new Array(arguments.length -  0);
while (G__40365__i < G__40365__a.length) {G__40365__a[G__40365__i] = arguments[G__40365__i + 0]; ++G__40365__i;}
  args = new cljs.core.IndexedSeq(G__40365__a,0);
} 
return G__40364__delegate.call(this,args);};
G__40364.cljs$lang$maxFixedArity = 0;
G__40364.cljs$lang$applyTo = (function (arglist__40366){
var args = cljs.core.seq(arglist__40366);
return G__40364__delegate(args);
});
G__40364.cljs$core$IFn$_invoke$arity$variadic = G__40364__delegate;
return G__40364;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map